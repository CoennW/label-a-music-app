import styles from './SearchBar.module.css';
import { useState } from 'react';

//API last.fm
const APIkey = "d732731be2f5f0ec4b10e5a3607d7090";
const APIroot = " http://ws.audioscrobbler.com/2.0/";

const axios = require('axios');

function SearchBar(props) {

  const [searchValue, setSearchValue] = useState('');
  
  //handle form and push data to App
  const handleSearch = e => {
    e.preventDefault();
    //fetch data
    fetchAlbumData();
    fetchTrackData();
  }

  //fetch albumdata from API last.fm
  const fetchAlbumData = () => {
    //prepare URL
    const getTopAlbums = APIroot + '?method=artist.gettopalbums&limit=10&artist=' + searchValue + '&api_key= ' + APIkey + ' &format=json';
    //get albums
    axios.get(getTopAlbums)
    .then(function (response) {
      // handle success
      props.setAlbumData(response.data.topalbums.album); 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
        
    });

  }

  //fetch trackdata from API last.fm
  const fetchTrackData = () => {  
    //prepare URL
    const getTracks = APIroot + '?method=track.search&limit=10&track=' + searchValue + '&api_key='+ APIkey +'&format=json';
    //get tracks
    axios.get(getTracks)
    .then(function (response) {
      // handle success
      props.setTrackData(response.data.results.trackmatches.track); 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
        
    });
    
    
    
    
    
    
    
    
    
    // //get songs
    // fetch(getTrack)
    // .then(response => response.json())
    // .then(data => fetchedData.push(data.results.trackmatches)); //prepare data 
    // //return
    // return fetchedData;
  }



  return (
    <form autoComplete="off" onSubmit={e => handleSearch(e)}>
      <input className={styles.searchBar} type="text" name="name" placeholder="search..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
     
    </form>
  );
}

export default SearchBar;
