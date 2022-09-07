import React from 'react'

const Posting = (props) => {
    return (
        <div className="posting">
            <h1>{props.posting.title}</h1>
            <img src={props.posting.imageURL} alt={props.posting.title} />
            <h2>{props.posting.price}</h2>
            <p>{props.posting.description}</p>
            
        </div>
    )
}

export default Posting