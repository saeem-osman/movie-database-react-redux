import React from 'react'
import { connect } from 'react-redux'


const MovieDetail = ( {movie} ) =>{
    if(!movie) return(
        <div>Please Select Something</div>
    )
    return(
        <div className="ui card">
        <div className="content">
            <div className="item">
            <div className="header">
            <b>{movie.title}</b>
            </div>
            <br />
            <div className="meta">
            {movie.year}
            </div>
            <div className="description">
            <b>Description: </b>{movie.description}
            </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        movie : state.selectedMovie
    }
}


export default connect(mapStateToProps )(MovieDetail)