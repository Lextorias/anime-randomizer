import React from 'react'
// this is our placeholder thumbnail image
import missingCover from '../assets/files/missing_cover.jpg'

/* tries to return thumbnail from API, else returns placeholder */
function displayImage(anime) {
    try {
        return anime.randomAnime.images.jpg.image_url;
    } catch (error) {null}

    try {
        return anime.randomAnime.images.webp.image_url;
    } catch (error) {null}
    return missingCover 
}

/* tries to return genres from API, else returns blank */
function displayGenre(anime) {
    var genreList = ''
    try {
        for (var i=0; i < anime.randomAnime.genres.length; i++)
            if (i<anime.randomAnime.genres.length-1)
                genreList += anime.randomAnime.genres[i].name + ', '
            else
                genreList += anime.randomAnime.genres[i].name
        return genreList
    } catch (error) {null}

    return ''
}
/* tries to truncate synopsis from API. If synopsis is null, returns blank */
function displaySynopsis(anime) {
    try {
        //can change truncation length by changing '> 0' to '>= num' and change slice to same num
        if (anime.randomAnime.synopsis.length > 0) {return anime.randomAnime.synopsis}
        else return anime.randomAnime.synopsis.slice(0, 1) + '...'
    } catch (error) {null}

    return ''
}

/* tries to build aired date string from API. Else returns blank */
function displayAired(anime) {
    var airDate = ''
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    try {
        airDate += months[anime.randomAnime.aired.prop.from.month-1]
        airDate += ' ' + anime.randomAnime.aired.prop.from.day
        airDate += ', ' + anime.randomAnime.aired.prop.from.year
        //can add status ('Finished Airing', etc.)
        //airDate += ' (' + anime.randomAnime.status + ')'
        if (anime.randomAnime.aired.prop.from.month != null)
            return airDate
        return ''
    } catch (error) {null}

    return ''
}
/* main function that displays random anime information */
function Randomizer({ randomAnime }) {
  return (
    <main>
        <div>
            {/* header for title of anime, which is clickable link */}
            <h1 className="title">
                <a
                    href={randomAnime.url}
                    target="_blank"
                    rel="noreferrer">
                    <strong>{ randomAnime.title }</strong>
                </a>
            </h1>
            {/* subtitle for english anime title */}
            <h2>
                { randomAnime.title_english }
            </h2>
            {/* anime info list */}
            <ul className="stats">
                <li>
                    {/* we call displayImage to get the anime's thumbnail */}
                    <img className="thumbnail" src= { displayImage({ randomAnime }) } alt="anime thumbnail"></img>
                </li>
                <li><strong>Type: </strong>{ randomAnime.type }</li>
                <li><strong>Aired: </strong>{ displayAired({ randomAnime }) }</li>
                <li><strong>Episodes: </strong>{ randomAnime.episodes } ({ randomAnime.duration })</li>
                <li><strong>Score: </strong>{ randomAnime.score }</li>
                <li><strong>Rank/Popularity: </strong>{ randomAnime.rank } / { randomAnime.popularity }</li>
                <li><strong>Rating: </strong>{ randomAnime.rating }</li>
                <li><strong>Genre: </strong>{ displayGenre({ randomAnime }) }</li>
                <li><strong>Synopsis: </strong>{ displaySynopsis({ randomAnime }) }</li>
            </ul>
        </div>
    </main>
  )
}

export default Randomizer