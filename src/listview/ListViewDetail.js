
import styles from './ListView.module.css';
import ListItem from './ListItem';

function ListView(props) {

  return (
    <div>

        <h2>Songs</h2>

        <div>
            {console.log(props.data ? props.data.map(x => x) : 'no data')}
        </div>
        
    </div>
  );
}

export default ListView;
