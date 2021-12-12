import React from 'react'
import Image from 'react-bootstrap/Image';
import '../styles/ArtistCardStyle.css';

function ArtistCard({userUrl,username,bio}) {
    return (
        <div className="artist_card">
            <Image className = "Artist_avtar_Image" src={userUrl} roundedCircle />
            <center><h5 className  ="card_title">{username}</h5></center>
            <center><h6>{bio}</h6></center>
        </div>
    )
}

export default ArtistCard
