import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './assets/scss/main.css'
import Randomizer from './components/Randomizer'

function App() {
	const [randomAnime, SetRandomAnime] = useState([])

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
				<button onClick={GetRandomAnime}>Random</button>
			</div>
		</div>
	)
}

export default App
