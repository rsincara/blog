import React from 'react'
import RecentPost from "./RecentPost";

const RecentPosts = () => {
    return (
        <div className='recent-posts-wrapper'>
            <div className="recent-posts-container container">
                <div className="recent-posts__info">
                    <h4 className='recent-posts__title'>Recent posts</h4>
                    <a className='recent-posts__all' href='#'>View all</a>
                </div>
                <div className="recent-posts">
                    <RecentPost title='Making a design system from scratch' date='12 Feb 2020'
                                section='Design' theme='Pattern'
                                text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
                    <RecentPost title='Creating pixel perfect icons in Figma' date='12 Feb 2020'
                                section='Figma' theme='Icon Design'
                                text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>

                </div>
            </div>
        </div>
    )
}

export default RecentPosts;