
import styles from './AlbumGridItem.module.css';



function AlbumGrid(props) {
  return (
    
      <div onClick={() => props.setDetailView([true, props.title, props.artist])} className={styles.item}>
          <img alt="album cover" src={props.img}/>
          <p className={styles.title}>{props.title}</p>
      </div>
    
  );
}

export default AlbumGrid;
