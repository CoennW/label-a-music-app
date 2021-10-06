
import styles from './ListView.module.css';
import ListItem from './ListItem';

function ListView(props) {

  return (
    <div>

        <h2>Songs</h2>

        <div>
            {props.trackData ? props.trackData.map((x, i) => <ListItem key={i} title={x.name} album={x.artist} />) : 'no data'}
            
            {/* {console.log(props.trackData ? props.trackData.map(x => x) : 'no data')} */}
        </div>
        
    </div>
  );
}

export default ListView;
