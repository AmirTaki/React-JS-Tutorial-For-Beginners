

const Profile  = (props) => {
    console.log(props)
    return (
        <>
            {props.children}
            <h1>Name : "{props.name}"</h1>
            <h1>Last name : "{props.lastname}"</h1>
            <hr />
        </>
    )
}

export default Profile