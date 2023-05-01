import "./joke.css"

export default function Joke(props) {
    console.log(props)
    return (
        <div className="joke">
            <p className="setup">Joke: {props.setup}</p>
            <p className="punchline">Answer: {props.punchline}</p>
            <hr />
        </div>

    )
}