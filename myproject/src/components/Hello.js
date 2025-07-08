const name = "amir";

const displayMessage = () => {
    return 'I need help!'
}
const Hello = () => {
    return (
        <>
            <h1>Hello world! {name}</h1>
            <h2>{displayMessage()}</h2>
        </>
    )
}

export default Hello