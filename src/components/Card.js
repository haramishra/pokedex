import React from 'react';
import StatusBar from './StatusBar'

export default (props) => (
    <div className='card'>
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"} ></img>
        <div className="pokemon-name">{"rhydon"}</div>
        {/* value of StatusBar should feth the data form the pokemon api */}
        <div>
            <StatusBar value={94} skillType={"HP"} />
            <StatusBar value={50} skillType={"ATK"} />
            <StatusBar value={22} skillType={"DEF"} />
            <StatusBar value={40} skillType={"SPEED"} />
        </div>
    </div>
)