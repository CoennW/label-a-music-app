
import styles from './Header.module.css';
import SearchBar from './SearchBar';


function Header(props) {
  return (
    <div className={styles.header}>
        <h1>Search for your favourite artists and songs:</h1>
        <SearchBar setAlbumData={props.setAlbumData} setTrackData={props.setTrackData}/>
    </div>
  );
}

export default Header;
