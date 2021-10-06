
import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import AlbumGrid from './album grid/AlbumGrid';
import ListView  from './listview/ListView';
import DetailView from './detail view/DetailView';

function App() {

  //fetch data from last.fm
  const [albumData, setAlbumData] = useState();
  const [trackData, setTrackData] = useState();
  const [detailView, setDetailView] = useState([false, '', '']);



  return (
    
    <div className={styles.app}>

      <Header setAlbumData={setAlbumData} setTrackData={setTrackData}/>
      
      {detailView[0] ? <DetailView data={detailView}/> : <AlbumGrid setDetailView={setDetailView} albumData={albumData} />}
      <ListView trackData={trackData} />
      
      

    </div>
  );
}

export default App;
