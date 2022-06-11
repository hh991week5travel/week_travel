//게시물 작성 페이지

import React from 'react'
import './Post.css'
import {Link} from 'react-router-dom'

const Post = () => {
  return (
    <>
    <h1>헤더 들어갈 곳입니다</h1>
    <div>

      <div className='container'>
        <div className='imgBox'>
        </div>
        <div className='imgUpload'>
          <input type="file" />
        </div>

        <div className='wrap'>
          <div className='title'>
            <span>제목</span>
            <input type="text" />
          </div>

          <div className='content'>
            <span>내용</span>
            <textarea name="textarea" rows="10" cols="50" >힘내보자</textarea>
          </div>

        </div>

      </div>

      <div className='footer'>
        <Link to = {`/Post`}>
          <button>작성 완료</button>
        </Link>
        
      </div>

    </div>
  </>
  )
}

export default Post;