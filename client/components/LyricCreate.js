import React,{Component} from 'react';
import mutation from '../queries/addLyrics'

import {graphql} from 'react-apollo'
class LyricCreate extends Component{
constructor(props){
super(props)
this.state = {
content:''
}

}
onSubmit(e){
    let content = this.state.content
    this.props.mutate({
        variables:{
            content,        
            songId:this.props.songId
        }
    })
    this.setState({content:''})
        e.preventDefault();

}
render(){  
return(
<form onSubmit={this.onSubmit.bind(this)}>
    <label>Add a lyric</label>
    <input  value={ this.state.content  } onChange={(e)=>{this.setState({content:e.target.value})}}></input>
</form>


);
}




}
export default graphql(mutation)(LyricCreate)