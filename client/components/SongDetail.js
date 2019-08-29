import React,{ Component } from 'react';
import fetchSong from "../queries/fetchSong";
import {graphql} from "react-apollo";
import {Link} from 'react-router'
import  LyricCreate from '../components/LyricCreate';
import  LyricList from './LyricList';
class SongDetail extends Component{    
    render(){
        const { song } = this.props.data
        if(!song){
            return (
                <div> ...loading</div>
            )
        }else{
        return(
            <div>
            <Link to="/"> Back</Link>
            <h3>{song.title}</h3> 
            <LyricList lyrics= { song.lyrics} > </LyricList>   
            <LyricCreate songId={this.props.params.id}></LyricCreate>
            </div>
        )
    }
    }
}
export default graphql(fetchSong,{ options:(props)=>{return {variables:{ id: props.params.id }}}})(SongDetail);