import  React ,{Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo'
import {Link} from 'react-router';
import query from '../queries/fetchSongs'

class SongList extends Component{
renderSongs(){
return this.props.data.songs.map((song,index)=>{
return (
  <li key={index} className="collection-item">
    {song.title}
    <i onClick={() =>this.onSongDelete(song.id)} className="material-icons collection-item">delete</i>
 </li>
);
})
}    
onSongDelete(id){
    this.props.mutate({
        variables:{id},
        //refetchQueries:[{query}]
    }).then(()=>{
        //to refetch queries that are assosiated with this particular component 
        this.props.data.refetch()
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
const mutation = gql`
mutation DeleteSong($id:ID){
    deleteSong(id: $id){
        id
    }
}`
export default graphql(mutation)(graphql(query)(SongList));