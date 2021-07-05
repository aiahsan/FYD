import React from 'react';
import {FaPlay} from 'react-icons/fa'
export default ({src,description})=>{
    return <div className="mt-2">
        <img src={src} alt="" style={{width:'100%'}}/>
        <div className="asdansdo23-sdawrwj">
        <div className="asdn28asd2-ase2">
        <div className="asdj29132ad-213DA">        {description()}</div>
        <div className="mr-4">
            <FaPlay color="#d2e3ff"/>
        </div>
        </div>
        </div>

    </div>
}