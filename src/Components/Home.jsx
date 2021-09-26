import React from 'react';
import About from "./About";
import RecentPosts from "./RecentPosts";
import FeaturedWorks from "./FeaturedWorks";

const Home = () => {
    return (
        <div className={'home'}>
            <About/>
            <RecentPosts/>
            <FeaturedWorks/>
        </div>
    );
};

export default Home;
