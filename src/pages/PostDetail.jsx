//게시물 상세 페이지

import React from 'react'
import Header from '../components/Header'
import Button from '../element/Button'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __deletePost } from '../redux/modules/post'
import { getCookie } from '../shared/Cookie'



const PostDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const  user = useSelector((user) => user);
  const { posts } = useSelector((state) => state.postReducer);
  console.log(posts.nickname)

  const removePost = () => {
    dispatch(__deletePost({
      token : getCookie("Authorization")
    }))
    navigate('/Main')
  }

  return(
    <>
      <Header />
      <div className='container'>
        {posts?.filter((post) => {
          return <>
            <img src={post.image} alt='' />
            <span>제목</span>
            <p>{post.title}</p>
            <span>내용</span>
            <p>{post.content}</p>
          </>
        }
        )}
        {user.user.is_login === posts.nickname &&
          <div className='footer'>
            <Link to={`/PostUpdate/`}>
              <Button>수정</Button>
            </Link>
            <Button onClick={removePost}>삭제</Button>
          </div>
        }
      </div>
    </>
  )
}

export default PostDetail;