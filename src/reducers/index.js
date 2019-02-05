
import { combineReducers } from 'redux'



const movieListReducer = () =>{
    return [
    {title: 'Titanic', year: '1997',
     description: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.'   
    
    },
    {title: 'Catch me if you can', year: '2002',
    description: "New Rochelle, the 1960s. High schooler Frank Abagnale Jr. idolizes his father, who's in trouble with the IRS. When his parents separate, Frank runs away to Manhattan with $25 in his checking account, vowing to regain dad's losses and get his parents back together. Just a few years later, the FBI tracks him down in France; he's extradited, tried, and jailed for passing more than $4,000,000 in bad checks. Along the way, he's posed as a Pan Am pilot, a pediatrician, and an attorney. And, from nearly the beginning of this life of crime, he's been pursued by a dour FBI agent, Carl Hanratty. What starts as cat and mouse becomes something akin to father and son."

    },
    {title: 'Shawshunk Redemption', year: '1994',
    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
    
    },
    
    {title: 'Forest Gump', year: '1994',
    description: "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone."
    }
    ]
}

const selectedMovieListReducer = (listOfMovie = 0, action) => {
    if(action.type === 'SELECT_MOVIE'){
        return action.payload
    }
    return listOfMovie
}

export default combineReducers({
    movies : movieListReducer,
    selectedMovie : selectedMovieListReducer
})