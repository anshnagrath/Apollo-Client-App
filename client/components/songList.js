import  React ,{Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo'
import {Link} from 'react-router';
class SongList extends Component{
renderSongs(){
return this.props.data.songs.map((song,index)=>{
return (
  <li key={index} className="collection-item">
    {song.title}
 </li>
);
})
}    
render(){
  
    if(this.props.data.loading){
   return(
    <div>
        loading..


    </div>

   )
    }else{

    
    return(
        <div>    
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="/song/new" className="btn-floating btn-large red right">
        < i className="material-icons">add</i>

        </Link>
        </div>
    )
    }
}

}
const query = gql`
{
    songs{
        title
        id
    }
}`;
export default graphql(query)(SongList);