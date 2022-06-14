//게시물 상세 페이지

import React from 'react'
import Header from '../components/Header'
import Image from '../components/ImageUpload'
import Input from '../element/Input'
import Content from '../element/Content'
import Button from '../element/Button'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { __deletePost } from '../redux/modules/post'
import { getCookie } from '../shared/Cookie'


const PostDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removePost = () => {
    dispatch(__deletePost({
      token : getCookie("Authorization")
    }))
    navigate('/Main')
  }

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
          <Link to = {`/PostUpdate/`}>
            <Button>수정</Button>
          </Link>
            <Button onClick={removePost}>삭제</Button>
        </div>
    </>
  )
}

export default PostDetail;