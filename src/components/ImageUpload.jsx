// import styled from 'styled-components'
import React, { useRef, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../shared/firebase';




function Image() {

  const [fileImage, setFileImage] = useState("");
  const imgRef = useRef(null);
  const register_imageRef = useRef();

  const uploadFB = async (e) => {
    const upload_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0])
    const file_url = await getDownloadURL(upload_file.ref);
    register_imageRef.current = { url: file_url };
  };

  return (
    <>

      {fileImage && (<img alt="sample" src={fileImage} style={{ margin: "auto", maxWidth: "300px", maxHeight: "300px" }} />)}
      <div style={{ alignItems: "center", justifyContent: "center" }} />
      <input type="file" placeholder='PICTURE' onChange={uploadFB} id="file" required />    </>
  )
};




export default Image;