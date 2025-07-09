const FunctionEvent = () => {
    const handleClick = () => {
        console.log('Button is clicked')
    }
    return (
        <>
            Functional Component 
            <button onClick={handleClick}>Click here</button>
        </>
    )
}

export default FunctionEvent;

