import React from 'react'

const Description = ({media}) => {
    return (
        <div>
            <h1>{media.trackName}</h1>
            <div>
            <img src={`${media.artworkUrl100}`} alt={media.trackName}/>
            </div>
            <div>
            <source src={`${media.previewUrl}`} type="video/mp4"/>
            </div>
        </div>
    )
}

export default Description
