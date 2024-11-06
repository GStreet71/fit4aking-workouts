import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='blue-shadow px-8 mx-auto py-4 rounded-md border-[2px] bg-gradient-to-r 
      from-slate-700 to-slate-950 border-blue-400 border-solid duration-200'>
            <p>{text}</p>
        </button>
    )
}