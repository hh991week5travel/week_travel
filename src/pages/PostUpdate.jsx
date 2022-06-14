//게시물 수정 페이지

import React from 'react'
import Header from '../components/Header'
import Image from '../components/ImageUpload'
import Input from '../element/Input'
import Content from '../element/Content'
import Button from '../element/Button'
import './PostAdd.css'
import {Link} from 'react-router-dom'


const PostUpdate = () => {
  return (
    <>
        <Header />
        <div className='container'>
      <Image />
      <span>제목</span>
      <Input />
      <span>내용</span>
      <Content />
      </div>

        <div className='footer'>
          <Link to={`/Post`}>
          <Button>수정 완료</Button>
          </Link>
        </div>


    </>
  )
}

export default PostUpdate;