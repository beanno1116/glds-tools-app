import { useGetTechGuides } from '../../../../../../../../../../Api/api';
import DetailListWidget from '../../../../../../../../../../Components/Widgets/Components/DetailListWidget/DetailListWidget';
import Widget from '../../../../../../../../../../Components/Widgets/Widget';
import DashboardRow from './Components/DashboardRow';

import styles from './dashboardModalView.module.css';

const sortByCreationDate = ((a,b) => {
  return new Date(b.creationDate) - new Date(a.creationDate);
})
const sortByModifiedDate = ((a,b) => {
  return new Date(b.modifiedDate) - new Date(a.modifiedDate);
})
const sortByDownloads = ((a,b) => {
  return new Date(b.downloads) - new Date(a.downloads);
})

const DashboardModalView = ({ ...props }) => {
  const {status,data} = useGetTechGuides();

  const recentlyAddedGuides = () => {
    if (!status.isLoading){
      let dataCopy = [...data];
      return dataCopy.sort(sortByCreationDate);
    }
    return [];
  }

  const recentlyUpdatedGuides = () => {
    if (!status.isLoading){
      let dataCopy = [...data];
      return dataCopy.sort(sortByModifiedDate);
    }
    return [];
  }

  const popularGuides = () => {
    if (!status.isLoading){
      let dataCopy = [...data];
      return dataCopy.sort(sortByDownloads);
    }
    return [];
  }



  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.layout}>

          <DashboardRow>

            <DetailListWidget heading={"Recently Viewed"} style={{flex:".25"}}>              
              <DetailListWidget.TwoColumnListItem id={"13"} name={"SMS Payments Lane Installation"} platform={"Loc SMS"} />
              <DetailListWidget.TwoColumnListItem id={"14"} name={"Loc DUFB  Plugin Server Installation"} platform={"Loc SMS"} />
            </DetailListWidget>

            <DetailListWidget heading={"Favorites"} style={{flex:".5"}}> 
              <DetailListWidget.FavoriteGuideListItem id={"13"} name={"SMS Payments Lane Installation"} platform={"Loc SMS"} />
              <DetailListWidget.FavoriteGuideListItem id={"14"} name={"Loc DUFB  Plugin Server Installation"} platform={"Loc SMS"} />
            </DetailListWidget>

            <Widget.ActionMenu heading={"Quick Actions"} style={{flex:".25"}}>
              <Widget.ActionMenu.SearchField />

            </Widget.ActionMenu>

          </DashboardRow>

          <DashboardRow>
            
            <DetailListWidget heading={"Popular Guides"} style={{flex:".25"}}>
              {popularGuides().map(guide => {
                return (
                  <DetailListWidget.TwoColumnListItem key={guide.id} id={guide.id} name={guide.name} platform={guide.platform} />
                )
              })}   
            </DetailListWidget>

            <div style={{display:"flex",gap:"1rem"}}>

              <DetailListWidget heading={"Recently Added"} style={{flex:".5",height:"100%"}}>
                {recentlyAddedGuides().map(guide => {
                  return (
                    <DetailListWidget.TwoColumnListItem key={guide.id} id={guide.id} name={guide.name} platform={guide.platform} />
                  )
                })}                
              </DetailListWidget>

              <DetailListWidget heading={"Recently Updated"} style={{flex:".5"}}>
                {recentlyUpdatedGuides().map(guide => {
                  return (
                    <DetailListWidget.TwoColumnListItem key={guide.id} id={guide.id} name={guide.name} platform={guide.platform} />
                  )
                })} 
              </DetailListWidget>

            </div>

            <div style={{flex:".25"}}></div>

          </DashboardRow>

        </div>
      </div>
    </div>
  );
}

export default DashboardModalView;