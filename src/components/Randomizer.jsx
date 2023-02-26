import React from 'react'

function displayImage(anime) {
    try {
        return anime.randomAnime.images.jpg.image_url;
    } catch (error) {null}

    try {
        return anime.randomAnime.images.webp.image_url;
    } catch (error) {null}

    return './src/assets/files/missing_cover.jpg'
}

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

function displaySynopsis(anime) {
    try {
        if (anime.randomAnime.synopsis.length <= 2000) {return anime.randomAnime.synopsis}
        else return anime.randomAnime.synopsis.slice(0, 2000) + '...'
    } catch (error) {null}

    return ''
}

function displayAired(anime) {
    var airDate = ''
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    try {
        airDate += months[anime.randomAnime.aired.prop.from.month-1]
        airDate += ' ' + anime.randomAnime.aired.prop.from.day
        airDate += ', ' + anime.randomAnime.aired.prop.from.year
        //airDate += ' (' + anime.randomAnime.status + ')'
        if (anime.randomAnime.aired.prop.from.month != null)
            return airDate
        return ''
    } catch (error) {null}

    return ''
}

function Randomizer({ randomAnime }) {
  return (
    <main>
        <div>
            <h1>
                <a
                    href={randomAnime.url}
                    target="_blank"
                    rel="noreferrer">
                    <strong>{ randomAnime.title }</strong>
                </a>
            </h1>
            <h2>
                { randomAnime.title_english }
            </h2>
            <ul className="stats">
                <img src= { displayImage({ randomAnime }) }></img>
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