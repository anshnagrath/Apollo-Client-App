import React,{ Component } from 'react' ;
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import query from '../queries/fetchSongs';
import LyricList from '../components/LyricList';

import {Link,hashHistory}  from 'react-router';
class SongCreate extends Component{
    constructor(props){
        super(props)
        this.state = {'title':''};
    }
    onSubmit(event){
        this.props.mutate({
            variables:{
                title:this.state.title
            },
            refetchQueries:[{query}]
        }).then((res)=>{
            hashHistory.push('/')
        });

        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
                <Link to="/">Back </Link>
    
               <h3> Create a New Song</h3> 
               <form onSubmit = {(e)=>this.onSubmit(e)}>
                   <label>SongTitle:</label>
                   <input onChange={(e)=>this.setState({title:e.target.value})} value={this.state.title}/>
               </form>
            </div>
        )
    }
}
const mutaion = gql`
mutation AddSong($title:String){
 addSong(title:$title){
     title
 }
}

`
export default graphql(mutaion)(SongCreate);