import React from 'react'
import './Row.css'


export default function Rows(props){
    const { label, children } = props;
    return (
        <div className='rows'>
            <div className='rows-item'>
                <div className='name'>{ label }</div>
                <div className='desc'>{ children }</div>
            </div>
        </div>
    )
}
