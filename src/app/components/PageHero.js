'use client'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import BlogPage from './blogpage'
const PageHero = ({ title, blog }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link href='/'>Home </Link>
          {blog && <Link href='/home'>/ home</Link>}/ {title}
        </h3>
      </div>
      <BlogPage />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
