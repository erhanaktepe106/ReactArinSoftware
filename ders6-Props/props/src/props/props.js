import React from 'react'

const Props=(props)=>{
    return(

        <div className="card">
        <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">{props.lastUpdate}</small></p>
            </div>
    </div>
    )
}
export default Props;