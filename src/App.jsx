import { useState, useEffect } from 'react'
import './assets/scss/main.css'
import Randomizer from './components/Randomizer'
import Loading from './components/Loading'
import Home from './components/Home'
var page = 0

// main app
function App() {
	const [randomAnime, SetRandomAnime] = useState([])
	//initialize setpage set to home
	const [page, SetPage] = useState("Home")

	/* we fetch a random anime from Jikan's API.
	   tbh I mostly stole this from a YouTube tutorial so idk how it works */
	const GetRandomAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/random/anime`)
		.then(res => res.json());
		//set page to loading
		SetPage("Loading")
		SetRandomAnime(temp.data);
		//wait for timeout to artificially lengthen load time
		await new Promise(r => setTimeout(r, 2500));
		//set page to randomizer
		SetPage("Random")
	}

	/* leftover from initializing anime at start
	useEffect(() => {
		GetRandomAnime()
	}, [])
	*/

	//if page is set to loading, display loading screen
	if (page == "Loading")
	{
		return (
			<div className="App">
				<div>
					<Loading/>
				</div>
				<div>
					{/* button does nothing but stays for consistency */}
					<button onClick={null}>Random</button>
				</div>
			</div>
		)
	}

	//if page is set to random, display random anime
	if (page == "Random")
	{
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

	//else, display homepage
	return (
		<div className="App">
			<div>
				<Home/>
			</div>
			<div>
				{/* click the button and fetch a new random anime */}
				<button onClick={GetRandomAnime}>Random</button>
			</div>
		</div>
	)
}

export default App
