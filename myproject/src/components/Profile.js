

const Profile  = (props) => {

    const {name, lastname} = props
    return (
        <>
            {props.children}
            <h1>Name : "{name}"</h1>
            <h1>Last name : "{lastname}"</h1>
            <hr />
        </>
    )
}

export default Profile