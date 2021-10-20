import React from 'react'
import UserInput from '../UserInput/UserInput'

const UserOutput = ( props)=>{
    return (
        <div>
            <p><strong> Username: {props.userName}</strong></p>
            <p> I hope i'll be over written </p>
        </div>

    )
}

export default UserOutput