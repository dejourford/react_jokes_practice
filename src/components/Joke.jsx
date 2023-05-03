import "./joke.css"


export default function Joke(props) {
    return (
        <>
            <h3>Setup: {props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
        </>
    )
}