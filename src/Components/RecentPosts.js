import React from 'react'

const RecentPosts = () =>{
    return(
        <div className='recent-posts-wrapper'>
            <div className="recent-posts-container container">
                <div className="recent-posts__info">
                    <h4 className='recent-posts__title'>Recent posts</h4>
                    <a className='recent-posts__all' href='#'>View all</a>
                </div>
                <div className="recent-posts">
                    <div className="recent-posts__post">
                        <h3 className="recent-posts__post-title">
                            Making a design system from scratch
                        </h3>
                        <span className="recent-posts__post-date">12 Feb 2020</span>
                        <span className="recent-posts__post-theme">Design, Pattern</span>
                        <p className='recent-posts__post-message'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="recent-posts__post">
                        <h3 className="recent-posts__post-title">
                            Creating pixel perfect icons in Figma                        </h3>
                        <span className="recent-posts__post-date">12 Feb 2020</span>
                        <span className="recent-posts__post-theme">Figma, Icon Design</span>
                        <p className='recent-posts__post-message'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentPosts;