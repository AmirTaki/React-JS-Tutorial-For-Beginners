import React from "react";


const Child = ({count}) => {
    console.log("Child Component is being rendered")
    return (
        <>
            <div>This is a child component</div>
            <h1>child count is {count}</h1>
        </>
    )
}
export default React.memo(Child) ;