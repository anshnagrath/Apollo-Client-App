import React,{Component} from 'react';
import {graphql} from 'react-apollo'
import mutation from '../queries/updateLikes';
class LyricList extends Component{
renderSongList(){
return (
    this.props.lyrics.map(({id,content,likes})=>{
        return (
            <li key={id} className="collection-item">
                {content}
                <div className="vote-box">
               <i className="material-icons" onClick={()=>this.onLike(id,likes)}>thumb_up</i> 
            {likes}
            </div>
            </li>            

            
            )

    })

)

}
onLike(id,likes){
this.props.mutate({
    variables:{'id':id},
    optimisticResponse:{
       __typename:'Mutation',
       likeLyric:{
           id:id,
           __typename:'LyricType',
           likes:likes + 1
       } 
    }
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