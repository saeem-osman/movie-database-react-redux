import React from 'react'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const App = () => {
    return(
        <div>
            
            <div className="ui block header">
                <h2 className="ui center aligned header">Movie Database</h2>
            </div>
            <div className="ui container grid block">
                <div className="ui row">
                <div className="eight wide column">
                
                    <MovieList />
                
                </div>
                
                <div className="eight wide column">
                    <MovieDetail />
                </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default App