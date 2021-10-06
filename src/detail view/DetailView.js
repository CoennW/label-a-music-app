
import { useEffect, useState } from 'react';
import styles from './DetailView.module.css';
import ListViewDetail from '../listview/ListViewDetail';

//API last.fm
const APIkey = "d732731be2f5f0ec4b10e5a3607d7090";
const APIroot = " http://ws.audioscrobbler.com/2.0/";

const axios = require('axios');

function DetailView(props) {

    const [detailData, setDetailData] = useState();
    const [trackData, setTrackData] = useState();
    
    //fetch detail data from last.fm
    useEffect(()=>{
        //prepare URL
        const getAlbumDetail = APIroot + '?method=album.getinfo&api_key=' + APIkey + '&artist=' + props.data[2] + '&album=' + props.data[1] + '&format=json';
        //get albums
        axios.get(getAlbumDetail)
        .then(function (response) {
        // handle success
    
        setDetailData(response.data); 
        setTrackData(response.data.album.tracks.track);
       
        
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
            
        });
    },[props.data])

  return (
    <div className={styles.overlay}>
      <h2>{props.data[2]}: {props.data[1]}</h2>
      <div className={styles.flex}>
        <img className={styles.albumCover} alt="album cover" src={detailData ? detailData.album.image[3]['#text'] : '#'} />
        <div className={styles.flexColumn}>
          {trackData ? trackData.map((x,i) => <p>{i}</p>) : "loading.."}
        </div>
      </div>
    </div>
  );
}

export default DetailView;
