import axios from "axios";


const getFileNameFromContentDisposition = (disposition) => {
  try {
    return disposition.split("; ")[1].split('=')[1];
  } catch (error) {
    console.error(error.message);
  }
}

const useDownloadFile = (url) => {
  

  const downloadFile = async (fileId) => {
    try {                  
      const response = await axios.get(url,{params:{id:fileId},responseType:'arraybuffer'});       
      const fileBlob = new Blob([response.data],{type:"application/pdf"});
      let fileName = getFileNameFromContentDisposition(response.headers["content-disposition"]);
      const opts = {
        types: [
          {
            description: fileName,
            accept: {'application/pdf':['.pdf']}
          }
        ],
        startIn: "downloads",
        suggestedName: fileName
      }
      let handle = await showSaveFilePicker(opts);
      let writable = await handle.createWritable();
      await writable.write(fileBlob);
      writable.close();
      return true;
    } catch (error) {
      console.error(`[ERROR] [COMP:GuideDetailModal] [EVT:downloadButtonClickEvent] - ${error.message}`);
      return false;
    }
  }

  return {
    downloadFile
  }
}

export default useDownloadFile;