import React from 'react';
import FeatureWork from "./FeatureWork";
import dashboard from '../Images/dashboard.png'
import portrait from '../Images/portrait.png'
import malayalm from '../Images/malayalm.png'
import component from '../Images/components.png'
import Post from "./Post";

const Works = (props) => {
    let id = props.match.params.id ? props.match.params.id : null;

    return id !== null ? <Post id={id}/> : (
        <div className={'works container'}>
            <h1 className={'works__title'}>Works</h1>
            <div className={'works__items'}>
                <FeatureWork id='6' img={dashboard} theme='Designing Dashboards' year='2020' section='Dashboard'
                             inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
                <FeatureWork id='6' img={portrait} theme='Designing Dashboards' year='2018' section='Illustration'
                             inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
                <FeatureWork id='6' img={malayalm} theme='Designing Dashboards' year='2018' section='Typography'
                             inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
                <FeatureWork id='6' img={component} theme='Designing Dashboards' year='2018' section='Typography'
                             inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>

            </div>
        </div>
    );
};

export default Works;
