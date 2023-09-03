/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Comments } from './data/comments'
import { pharagraph } from './data/pharagraph'
import { RecentData } from './data/recentdata'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import PersonIcon from '@mui/icons-material/Person'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import PageHero from './pagehero'
const Blog = () => {
  return (
    <>
      <PageHero title={'Blog'} />
      <div className='blog_section'>
        <div className='container'>
          <div className='col_I'>
            <div className='img'>
              <img
                src='https://wpthemesgrid.com/themes/free/eshop/images/blog-single1.jpg'
                alt=''
              />
              <div className='info'>
                <h2>What Are The Secrets To Start- Up Success?</h2>
                <div className='icnos'>
                  <CalendarMonthOutlinedIcon />
                  <span>by admin</span>
                  <PersonIcon />
                  <span>by admin</span>
                  <QuestionAnswerOutlinedIcon />
                  <span>by admin</span>
                </div>
              </div>
              <div className='description'>
                {pharagraph.map((box) => {
                  const { id, info } = box
                  return (
                    <div className='box' key={id}>
                      {info}
                      <QuestionAnswerOutlinedIcon />
                    </div>
                  )
                })}
              </div>
              <div className='ourtags'>
                <h3>tags:</h3>
                <div className='child'>
                  <p>class</p>
                  <p>pant</p>
                  <p>t-shirt</p>
                  <p>swater</p>
                </div>
              </div>
              <div className='ourcomments'>
                <h3 className='title_p'>Comments ({Comments.length})</h3>
                <div className='single_comment_section'>
                  {Comments.map((box) => {
                    const { id, userName, data, info, img, icon } = box
                    return (
                      <div className='box' key={id}>
                        <div className='img'>
                          <img src={img} alt='' />
                        </div>
                        <div className='information_usr'>
                          <div className='user_data'>
                            <p> {userName}</p>
                            <p>{data}</p>
                          </div>
                          <div className='user_info'>
                            {info}
                            <p>{icon}replay</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='form_valid'>
                <h3 className='title_p'>leave a comment</h3>
                <div className='wrapper'>
                  <div className='inner'>
                    <form action=''>
                      <div className='form-group'>
                        <div className='form-wrapper'>
                          <label>
                            First Name <span>*</span>
                          </label>
                          <input type='text' className='form-control' />
                        </div>
                      </div>
                      <div className='form-wrapper'>
                        <label>
                          Email Name <span>*</span>
                        </label>
                        <input type='text' className='form-control' />
                      </div>
                      <div className='form-wrapper'>
                        <label>
                          Your Message Name <span>*</span>
                        </label>
                        <textarea
                          type='Messge'
                          className='form-control textarea'
                        />
                      </div>
                      <button>Register Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col_II'>
            <div className='main_sidebar'>
              <div className='search_input_sidbar'>
                <input type='text' placeholder='search here..' />
                <SearchSharpIcon style={{ fontSize: '24px' }} />
              </div>
              <div className='title_sidbar'>
                <h3 className='title_p'>Blog Categories</h3>
                <p>Men's Apparel</p>
                <p>Women's Apparel</p>
                <p>Bags Collection</p>
                <p>Accessories</p>
                <p>Sun Glasses</p>
              </div>
              <div className='img_said_bar'>
                <h3 className='title_p'>Recent Post</h3>
                {RecentData.map((box) => {
                  const { id, img, title, icon, infoDate, num } = box
                  return (
                    <div className='box_saidbar' key={id}>
                      <div className='card_info'>
                        <img src={img} alt='' />
                        <div className='new_date'>
                          <h4>{title}</h4>
                          <p>
                            {icon}
                            {infoDate}
                            <QuestionAnswerOutlinedIcon />
                            {num}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='tags_sidbar'>
                <h3 className='title_p'> tags</h3>
                <div className='website'>
                  <p>Html</p>
                  <p>website</p>
                  <p>template</p>
                  <p>ecommerce</p>
                  <p>wordpress</p>
                  <p>business</p>
                  <p>education</p>
                  <p>multipurpose</p>
                </div>
              </div>
              <div className='newslatter'>
                <h3 className='title_p'>newslatter</h3>
                <div className='card'>
                  <h4>Subscribe and Get News Latest Updates.</h4>
                  <div className='form'>
                    <input type='email' placeholder='enter your email' />
                    <input type='submit' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
