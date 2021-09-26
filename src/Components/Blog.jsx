import React from 'react';
import RecentPost from "./RecentPost";

const Blog = () => {
    return (
        <div className={'blog container'}>
            <h1 className={'blog__title'}>Blog</h1>
            <RecentPost title={'UI Interections of the week'} date={'12 Feb 2019'} section={'Express'}
                        theme={'Handlebars'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

            <RecentPost title={'UI Interections of the week'} date={'12 Feb 2019'} section={'Express'}
                        theme={'Handlebars'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

            <RecentPost title={'UI Interections of the week'} date={'12 Feb 2019'} section={'Express'}
                        theme={'Handlebars'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

            <RecentPost title={'UI Interections of the week'} date={'12 Feb 2019'} section={'Express'}
                        theme={'Handlebars'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

            <RecentPost title={'UI Interections of the week'} date={'12 Feb 2019'} section={'Express'}
                        theme={'Handlebars'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
        </div>
    );
};

export default Blog;
