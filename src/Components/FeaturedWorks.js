import React from 'react'
import dashboard from '../Images/dashboard.png'
import portrait from '../Images/portrait.png'
import malayalm from '../Images/malayalm.png'
import FeatureWork from "./FeatureWork";
const FeaturedWorks = () =>{
    return(
        <div className='fworks-wrapper container'>
            <div className="fworks">
                <h4 className="fworks__title">Featured works</h4>
                <div className="fworks__items">
                    <FeatureWork id='6' img={dashboard} theme='Designing Dashboards' year='2020' section='Dashboard' location='main'
                    inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
                    <FeatureWork id='6' img={portrait} theme='Designing Dashboards' year='2018' section='Illustration' location='main'
                                 inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
                    <FeatureWork id='6' img={malayalm} theme='Designing Dashboards' year='2018' section='Typography' location='main'
                                 inroduction='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
                </div>
            </div>
        </div>
    )
}

export default FeaturedWorks;

