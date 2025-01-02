import {useQuery} from "react-query";
import axios from "axios";
import User from "../Models/User";

const debug = true;
const API_ENDPOINT_BASE = debug ? "https://localhost:7291/" : "https://data.gldstools.com/";

const axiosClient = axios.create({
  baseURL: API_ENDPOINT_BASE,
  headers:{ 'Authorization': 'Bearer abcde12345'}
})


const createDownloadLink = (response,fileName) => {
  try {    
    const downloadUrl = URL.createObjectURL(new Blob([response]));     
    const link = document.createElement('a');    
    link.href = downloadUrl;
    link.setAttribute('download',fileName);
    document.body.appendChild(link);
    
    return () => {
      
      link.click();
      link.remove();  
    }
  } catch (error) {
    console.error(error.message);
  }
}

const getFileNameFromContentDisposition = (disposition) => {
  try {
    return disposition.split("; ")[1].split('=')[1];
  } catch (error) {
    console.error(error.message);
  }
}






const getUsers = async ({signal,uid}) => {
  const response = await axiosClient.get("users",{params:{uid:uid},signal});
  
  const results = response.data.data.map(u => {
    const user = new User();
    user.id = u.id;
    user.uid = u.uid;
    user.userName = u.username;
    user.firstName = u.firstName;
    user.lastName = u.lastName;
    user.email = u.email;
    user.title = u.title;
    user.role = u.role;
    user.reportsTo = u.reportsTo,
    user.phone = u.phone;    
    user.authLevel = u.authLevel;
    user.hireDate = u.hireDate;
    user.creationDate = u.creationDate;
    user.modifiedDate = u.modifiedDate;    
    return user;
  });
  return results;
}
const useGetUsers = (uid = "") => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["users",uid],
    queryFn: ({signal}) => getUsers({signal,uid}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getPlugins = async ({signal,id}) => {
  const response = await axiosClient.get("plugins",{signal});    
  return response.data.data.map(d=>d);
}
const useGetPlugins = (id = "") => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["plugins",id],
    queryFn: ({signal}) => getPlugins({signal,id}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getTechGuides = async ({signal,id}) => {  
  const response = await axiosClient.get("guides",{params:{id:id},signal});  
  return response.data.data.map(d => d);
}
const useGetTechGuides = (id = "") => {
  const { isLoading,isFetching, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["guides",id],
    queryFn: ({signal}) => getTechGuides({signal,id}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isFetching,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getCustomers = async ({signal,id}) => {
  const response = await axiosClient.get("customers",{params:{id:id},signal});  
  return response.data.data.map(d=>d);
}
const useGetCustomers = (id = "") => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["customers",id],
    queryFn: ({signal}) => getCustomers({signal,id}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getSales = async ({signal,id}) => {
  const response = await axiosClient.get("sales",{params:{id:id},signal});
  return response.data;
}
const useGetSales = (id = "") => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["sales",id],
    queryFn: ({signal}) => getSales({signal,id}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}




const getAlerts = async ({signal,uid}) => {
  const response = await axiosClient.get("alerts",{params:{uid:uid},signal});
  return response.data;
}
const useGetAlerts = (uid="") => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["alerts",uid],
    queryFn: ({signal}) => getAlerts({signal,uid}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getPlatformOptions = async ({signal}) => {
  const response = await axiosClient.get("platform-options",{signal});
  return response.data.data.map(d => d);
}
const useGetPlatformOptions = () => {

  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["platformOptions"],
    queryFn: ({signal}) => getPlatformOptions({signal}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getGroupOptions = async ({signal}) => {
  const response = await axiosClient.get("categories",{signal});
  return response.data.data.map(d => d);
}
const useGetGroupOptions = () => {
  const {isLoading,isError,isSuccess,isIdle,data,error} = useQuery({
    queryKey: ["groupOptions"],
    queryFn: ({signal}) => getGroupOptions({signal}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getEmployeeTypes = async ({signal,id}) => {
  const response = await axiosClient.get("employees/types",{params:{id:id},signal});  
  return response.data.data.map(d => d);
}
const useGetEmployeeTypes = (id="") => {
  const {isLoading,isError,isSuccess,isIdle,data,error} = useQuery({
    queryKey: ["employeeTypes",id],
    queryFn: ({signal}) => getEmployeeTypes({signal,id}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getEmployeeDepartments = async ({signal,id}) => {
  const response = await axiosClient.get("employees/departments",{params:{id:id},signal});  
  return response.data.data.map(d => d);
}
const useGetEmployeeDepartments = (id="") => {
  const {isLoading,isError,isSuccess,isIdle,data,error} = useQuery({
    queryKey: ["employeeDepartments",id],
    queryFn: ({signal}) => getEmployeeDepartments({signal,id}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getTags = async ({signal}) => {
  const response = await axiosClient.get("tags",{signal});
  return response.data.data.map(d => d);
}
const useGetTags = () => {
  const {isLoading,isError,isSuccess,isIdle,data,error} = useQuery({
    queryKey: ["tags"],
    queryFn: ({signal}) => getTags({signal}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getUserLevels = async ({signal}) => {
  const response = await axiosClient.get("users/levels",{signal});
  return response.data.data.map(d => d);
}
const useGetUserLevels = () => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: ["userLevels"],
    queryFn: ({signal}) => getUserLevels({signal}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const getMenuItems = async ({signal,menuGroup}) => {
  const response = await axiosClient.get("menu",{params:{group:menuGroup},signal});  
  let tmp = menuGroup;  
  return response.data;
}
const useGetMenuItems = (menuGroup) => {
  
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: [menuGroup],
    queryFn: ({signal}) => getMenuItems({signal,menuGroup}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const post = async (endPoint,postData,headers,callback) => {
  try {
    const response = await axiosClient.post(endPoint,postData,{headers});
    if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
    const {success,data,token} = response.data;
    if (success){ 
      callback({success:true,data,token})
      return;
    }
    callback({success:false,data:"",token:""})
    return;
  } catch (error) {
    console.error(error.message);
  }
}

const get = async (endPoint,config,callback) => {
  try {
    const response = await axiosClient.get(endPoint,config);

    callback(response);
  } catch (error) {
    console.error(error.message);
  }
}

const download = async (endPoint,config) => {
  try {
    const response = await axiosClient.get(endPoint,config);
    
    let fileName = getFileNameFromContentDisposition(response.headers["content-disposition"]);
    let startDownload = createDownloadLink(response,fileName);
    startDownload();
  } catch (error) {
    console.error(`[ERROR] [OBJ:Api] [FUNC:download] - ${error.message}`);
  }
}

const remove = (endPoint,data,headers) => {
  try {
    
  } catch (error) {
    console.error(error.message);
  }
}

const update = (endPoint,data,headers) => {
  try {
    
  } catch (error) {
    console.error(error.message);
  }
}


const request = {
  delete: remove,
  download: download,
  get: get,
  post: post,
  update: update
}


export {
  request,
  useGetAlerts,
  useGetCustomers,
  useGetEmployeeDepartments,
  useGetEmployeeTypes,
  useGetGroupOptions,
  useGetMenuItems,
  useGetPlatformOptions,
  useGetPlugins,
  useGetSales,
  useGetTags,
  useGetTechGuides,
  useGetUserLevels,
  useGetUsers  
}