import { useState, useEffect } from 'react'
import './assets/scss/main.css'
import Randomizer from './components/Randomizer'

function App() {
	const [randomAnime, SetRandomAnime] = useState([])

	/* we fetch a random anime from Jikan's API.
	   tbh I mostly stole this from a YouTube tutorial so idk how it works */
	const GetRandomAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/random/anime`)
		.then(res => res.json());

		SetRandomAnime(temp.data);
	}

	useEffect(() => {
		GetRandomAnime()
	}, [])

	return (
		<div className="App">
			<div>
				<Randomizer
					randomAnime={randomAnime} />
			</div>
			<div>
				{/* click the button and fetch a new random anime */}
				<button onClick={GetRandomAnime}>Random</button>
			</div>
		</div>
	)
}

export default App
