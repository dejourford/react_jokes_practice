import Header from "./components/Header"
import Joke from "./components/Joke"
import jokeData from "./components/jokeData"

export default function App() {
    const jokeElement = jokeData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })

    return (
        <div className="container">
            <Header />
            {jokeElement}
        </div>
    )
}