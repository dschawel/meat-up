import React from 'react'

const Details = props => {
    
    console.log(props)
    return (
        <div>{props.match.params.id}</div>
    )
}

export default Details