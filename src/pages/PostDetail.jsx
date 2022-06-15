//게시물 상세 페이지

import React, { useEffect } from 'react'
import Header from '../components/Header'
import Button from '../element/Button'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __deletePost, __loadDetail } from '../redux/modules/post'
import { getCookie } from '../shared/Cookie'



const PostDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

console.log(params.postboardId)

  useEffect(() => {
    dispatch(__loadDetail({
      token : getCookie("Authorization"),
      boardId : params.postboardId
    }));
  }, [dispatch]);


  const  user = useSelector((user) => user);
  const  detail  = useSelector((state) => state.postReducer?.detail?.postIdCheck);
  console.log(detail)

  const loginUser = getCookie("nickname")
console.log(loginUser)

  const removePost = () => {
    dispatch(__deletePost({
      token : getCookie("Authorization"),
      boardId : params.postboardId
    }))
    navigate('/Main')
  }
  console.log(detail?.User?.nickname)

  return(
    <>
      <Header />
      <div className='container'>
        

            <img src={detail?.image} alt=''/>
            <span>{detail?.title}</span>
            <span>{detail?.content}</span>

        

        {loginUser === detail?.User?.nickname &&
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