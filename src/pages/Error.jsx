//error 페이지

import React from 'react'
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <Link to={'/'}>
      <img src='404.png'
        back_size="100% 100%"
        height="100%"
        width="100%"
        alt='404page' />
    </Link>
  )
}

export default Error