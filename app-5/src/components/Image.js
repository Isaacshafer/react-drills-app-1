import React from 'react'
import { useState } from 'react'

export default function Image(props){
    return(
        <div>
            <img src={props.url}/>
        </div>
    )
}