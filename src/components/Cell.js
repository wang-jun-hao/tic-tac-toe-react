import React from 'react'

export default function Cell(props) {
    return (
        <button className={"cell " + props.value} onClick={props.onClick}/>
    );
}
