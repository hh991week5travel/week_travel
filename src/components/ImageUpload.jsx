// import styled from 'styled-components'
import React, { useRef, useState } from 'react'

function Image() {

  const [fileImage, setFileImage] = useState("");
  const imgRef = useRef(null);


  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]))

  };


  return(
    <>
    {fileImage && ( <img alt = "sample" src={fileImage} style={{margin : "auto", maxWidth : "300px", maxHeight : "300px"}} /> )}
    <div style={{alignItems : "center", justifyContent : "center"}} />
    <input type="file" accept={'image/*'} onChange={saveFileImage}/>
    </>
  )
};




export default Image;