import React from 'react'

const RecentPost = (props) =>{
    return  (
        <div className="recent-posts__post">
            <h3 className="recent-posts__post-title">
                {props.title}
            </h3>
            <span className="recent-posts__post-date">{props.date}</span>
            <span className="recent-posts__post-theme">{props.section}, {props.theme}</span>
            <p className='recent-posts__post-message'>{props.text}</p>
        </div>
    )
}

export default RecentPost;