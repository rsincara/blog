import React from 'react'
import About from "./About";
import RecentPosts from "./RecentPosts";
import FeaturedWorks from "./FeaturedWorks";

const Main = () => {
    return (
        <main className='main'>
            <About />
            <RecentPosts />
            <FeaturedWorks />
        </main>
    )
}

export default Main;