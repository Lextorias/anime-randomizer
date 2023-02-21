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
        if (anime.randomAnime.synopsis.length <= 900) {return anime.randomAnime.synopsis}
        else return anime.randomAnime.synopsis.slice(0, 900) + '...'
    } catch (error) {null}

    return ''
}

function Randomizer({ randomAnime }) {
  return (
    <main>
        <div className="main-head">
            <div className="img">
            </div>
            <h1>
                <a
                    href={randomAnime.url}
                    target="_blank"
                    rel="noreferrer">
                    { randomAnime.title }
                </a>
            </h1>
            <ul className="stats">
            <img src=
                    { displayImage({ randomAnime }) }>
            </img>
            <li><strong>Also Known As: </strong>{ randomAnime.title_english }</li>
            <li><strong>Type: </strong>{ randomAnime.type }</li>
            <li><strong>Episodes: </strong>{ randomAnime.episodes }</li>
            <li><strong>Duration: </strong>{ randomAnime.duration }</li>
            <li><strong>Score: </strong>{ randomAnime.score }</li>
            <li><strong>Ranked: </strong>{ randomAnime.rank }</li>
            <li><strong>Popularity: </strong>{ randomAnime.popularity }</li>
            <li><strong>Rating: </strong>{ randomAnime.rating }</li>
            <li><strong>Genre: </strong>{ displayGenre({ randomAnime }) }</li>
            <li><strong>Synopsis: </strong>{ displaySynopsis({ randomAnime }) }</li>
            </ul>
        </div>
    </main>
  )
}

export default Randomizer