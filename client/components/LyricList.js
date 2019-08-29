import React,{Component} from 'react';
import {graphql} from 'react-apollo'
import mutation from '../queries/updateLikes';
class LyricList extends Component{
renderSongList(){
return (
    this.props.lyrics.map(({id,content})=>{
        return (
            <li key={id} className="collection-item">
                {content}
               <i className="material-icons" onClick={()=>this.onLike(id)}>thumb_up</i> 
            </li>            
            
            )

    })

)

}
onLike(id){
this.props.mutate({
    variables:{'id':id}
})
}
render(){

    return(
        <ul className="collection">
         {this.renderSongList()}     

        </ul>

    )
}
}
export default graphql(mutation)(LyricList);