//게시물 상세 페이지

import React from 'react'
import Header from '../components/Header'
import Image from '../element/Image'
import Input from '../element/Input'
import Content from '../element/Content'
import Button from '../element/Button'
import {Link} from 'react-router-dom'

const PostDetail = () => {
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

          <Link to = {`/Main`}>
            <Button>삭제</Button>
          </Link>
        </div>


    </>
  )
}

export default PostDetail;