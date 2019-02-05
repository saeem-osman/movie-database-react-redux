import React from 'react'
import { selectMovie } from '../actions/index'
import { connect } from 'react-redux'


class MovieList extends React.Component {

    renderMovie(){
        return this.props.movies.map((movie) =>{
            return(
                <div className="ui grid">
                <div class="eight wide column">
                <div className="" key = {movie.title}>
                <h3>{movie.title}</h3>
                <button className="ui button primary" onClick={()=>this.props.selectMovie(movie)}>Detail</button>
                </div>
                                   
                </div>
                </div>
            )
        })
            
        
    }

    render() {
        return (
            <div>
                {this.renderMovie()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {movies : state.movies}
}




export default connect(mapStateToProps,{ selectMovie })(MovieList)