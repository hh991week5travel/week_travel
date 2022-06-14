//게시물 수정 페이지

import React, { useRef } from 'react'
import Header from '../components/Header'
import Image from '../components/ImageUpload'
import Input from '../element/Input'
import Content from '../element/Content'
import Button from '../element/Button'
import './PostAdd.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { __updatePost } from '../redux/modules/post'
import { getCookie } from '../shared/Cookie'


const PostUpdate = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentRef = useRef();

  const updatePost = () => {
    dispatch(__updatePost({
      title : titleRef.current.value,
      content : contentRef.current.value,
      // imgUrl : imgUrl.current.value,
      token : getCookie('token')
    }))
    window.alert('수정 완료!!')
    navigate('/postDetail')
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
            <Button onClick={updatePost}>수정 완료</Button>
          </div>
    </>
  )
}

export default PostUpdate;