
import styles from './ListItem.module.css';



function AlbumGrid(props) {
  return (
    <div className={[styles.item, styles.flex].join(' ')}>
        <div className={[styles.gap, styles.flex].join(' ')}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.album}>{props.album}</p>
        </div>
          <p>03:76</p>
    </div>
  );
}
 
export default AlbumGrid;
