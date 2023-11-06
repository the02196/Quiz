import React from 'react'
import { NavLink } from 'react-router-dom'

function NotPage() {
  return (
    <div>
        <p className='text-7xl text-center'>404 Not Found</p>
        <p className='text-5xl text-center'>페이지를 찾을 수 없습니다.</p>
        <NavLink to="/">메인으로 바로가기</NavLink>
         </div>
  )
}

export default NotPage