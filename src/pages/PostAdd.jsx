//게시물 작성 페이지

import React, { useRef } from 'react'
import Header from '../components/Header'
import Image from '../components/ImageUpload'
import Input from '../element/Input'
import Content from '../element/Content'
import Button from '../element/Button'
import './PostAdd.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { __addPost } from '../redux/modules/post'


const Post = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const titleRef = useRef(null)
  const contentRef = useRef(null)


  const addPost = (e) => {
    dispatch(__addPost({title : titleRef.current.value, content : contentRef.current.value}))
    window.alert('작성 완료')
    navigate('/Main')
  }

  return (
    <>
    <Header />
      <div className='container'>
      <Image />
      <span>제목</span>
      <Input ref={titleRef}/>
      <span>내용</span>
      <Content ref={contentRef}/>
      </div>

      <div className='footer'>

        <Button onClick={addPost}>작성 완료</Button>

      </div>

  </>
  )
}

export default Post;