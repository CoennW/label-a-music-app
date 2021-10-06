
import styles from './AlbumGrid.module.css';
import AlbumGridItem from './albumGridItem';


function AlbumGrid(props) {

  return (
    <div>

        <h2>Albums</h2>

        <div className={styles.flex}>
        
            {props.albumData ? props.albumData.map((x, i) => <AlbumGridItem key={i} setDetailView={props.setDetailView} title={x.name} artist={x.artist.name} img={x.image[2]['#text']}/>) : 'no data'}
        
        </div>
        
    </div>
  );
}

export default AlbumGrid;
