import React from 'react'

const Button = (props) => {

    const {background, width, height, text, onclick}=props;

  return (
    <>
        <button style={{backgroundColor:`${background}`, width:`${width}`, height:`${height}`, borderRadius:'0.2rem', borderStyle:'hidden', color:'white'}} onClick={onclick}>{text}</button>
    </>
  )
}

export default Button