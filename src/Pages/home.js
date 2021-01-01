import React, {useRef, useEffect} from "react";
import {TweenMax, Expo} from 'gsap'

function Home() {
    let overlay = useRef(null);
    let overlay_h1 = useRef(null);
    let overlay_span = useRef(null);
    let Logo = useRef(null);
    let menu = useRef(null);
    let scrolldown = useRef(null);
    let text = useRef(null);
    let title = useRef(null);
    let p = useRef(null);
    let watchnow = useRef(null);
    let media_ul = useRef(null);
    let ellipse_yellow = useRef(null)
    let circle1 = useRef(null);
    let circle2 = useRef(null);



    useEffect(() => {
        TweenMax.to(
            overlay,
            2,
            {
                delay: 1,
                opacity: 1, 
                top: "-100%", 
                ease: Expo.easeInOut
            }
        )
        TweenMax.to(
            overlay_h1,
            2,
            {
                opacity: 0, 
                y: -60, 
                ease: Expo.easeInOut
            }
        )
        TweenMax.to(
            overlay_span,
            2,
            {
                delay: .3,
                opacity: 0, 
                y: -60, 
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            Logo,
            1,
            {
                delay: 3,
                opacity: 0, 
                y: -100,
                ease: Expo.easeInOut
            }
        )
        TweenMax.staggerFrom(
            menu,
            1,
            {
                delay: 3.2,
                opacity: 0, 
                x: -100,
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            scrolldown,
            1,
            {
                delay: 3.4,
                opacity: 0, 
                y: 100,
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            text,
            1,
            {
                delay: 3,
                opacity: 0, 
                x: 200,
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            title,
            1,
            {
                delay: 3,
                opacity: 0, 
                x: 200,
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            p,
            1,
            {
                delay: 3.2,
                opacity: 0, 
                x: 200,
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            watchnow,
            1,
            {
                delay: 3.4,
                opacity: 0, 
                x: 200,
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            media_ul,
            1,
            {
                delay: 3,
                opacity: 0, 
                y: 100,
                ease: Expo.easeInOut
            }
        )
        // TweenMax.from(
        //     ellipse_container,
        //     1,
        //     {
        //         delay: 2,
        //         opacity: 0, 
        //         top: "-100%", 
        //         ease: Expo.easeInOut
        //     }
        // )
        TweenMax.from(
            ellipse_yellow,
            1,
            {
                delay: 3.5,
                opacity: 0, 
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            circle1,
            1,
            {
                delay: 2.4,
                opacity: 0, 
                ease: Expo.easeInOut
            }
        )
        TweenMax.from(
            circle2,
            1,
            {
                delay: 2.6,
                opacity: 0, 
                ease: Expo.easeInOut
            }
        )
    }, []);

    // opacity: 0, y: -60, ease: Expo.easeInOut

    return(
<div>
    <div ref={el => {overlay = el}} className="overlay">
        <div ref={el => {overlay_h1 = el}} className="curtaintext">Цех Колбасный</div>
        <span ref={el => {overlay_span = el}} className="curtainspan">Детский Садик</span>
</div>

    <div className="wrapper">
        <div className="nav">
            <div ref={el => {Logo = el}} className="Logo">
                <h1>
                    <span> Цех <br></br> Колбасный</span>
                    <br>
                    
                    </br>
                    Детский Садик
                </h1>
            </div>

            <div className="menu-links">
                <ul ref={el => {menu = el}}>
                    <li>home.</li>
                    <li>snow life</li>
                    <li>home.</li>
                </ul>
            </div>
            <div ref={el => {scrolldown = el}} className="scrolldown">scroll</div>
        </div>

        <div ref={el => {text = el}} className="text">
            <div ref={el => {title = el}} className="title">ჩურჩული</div>
            <p ref={el => {p = el}}>კამატოზ squad, კამატოზიკ კამატოზიკი კამატოზნიე კამატოზ squad, კამ</p>
        </div>
        <div ref={el => {watchnow = el}} className="watchnow">
            <i className="fa fa-play"></i>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">watch now!</a>
        </div>

        <div className="media">
            <ul ref={el => {media_ul = el}}>
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-instagram"></i></li>
            </ul>
        </div>

        <div className="ellipse-container">
            <div className="ellipse thin"></div>
            <div className="ellipse thick"></div>
            <div ref={el => {ellipse_yellow = el}} className="ellipse yellow"></div>
        </div>

        <div ref={el => {circle1 = el}} className="circle1"><span>Mission</span>
            <div className="yellow_one"></div>
            <div className="white_one"></div>
        </div>
        <div ref={el => {circle2 = el}} className="circle2"><span>Vision</span>
            <div className="yellow_one"></div>
            <div className="white_one"></div>
        </div>
    </div>
</div>

    )
}


export default Home;

