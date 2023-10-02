import React from 'react'
import '../css/herosection.css';
import gym from '../assets/gym-logo.png'
import boy from '../assets/boy-pic.png'
import {AiFillHeart} from 'react-icons/ai';

const Herosection = () => {
  return (
    <div>
        <div className='herosection'>

            {/* left part */}
            <div className='left-hero'>

                {/* navbar */}
                <div className='navbar'>
                    <div>
                        <img className='img-logo' src={gym}/>
                    </div>

                    <div className='navbar-items'>
                        <div>Home</div>
                        <div>Programs</div>
                        <div>Why us</div>
                        <div>Plans</div>
                        <div>Testimonials</div>
                    </div>
                </div>

                {/* about */}
                <span className='about-home'>
                    <span className='about-1'>THE BEST F</span>
                    <span className='about-2'>ITNESS CLUB IN THE TOWN</span>
                </span>

                {/* written section */}
                <div className='writing-home'>
                    {/* writing */}
                    <div className='write-home'>
                        <div className='head-home'>
                            SHAPE YOUR
                        <div className='ideal-home'>IDEAL BODY</div>
                        </div>
                        <div className='desc-home'>In here we will help you to shape and build your ideal body and live up your life to fullest</div>

                        {/* numbers */}
                        <div className='cards'>
                            <div className='one-card'>
                                <div className='head-card'>+ 1</div>
                                <div className='type-card'>EXPERT COACHES</div>
                            </div>
                            <div className='one-card'>
                                <div className='head-card'>+ 50</div>
                                <div className='type-card'>MEMBERS JOINED</div>
                            </div>
                            <div className='one-card'>
                                <div className='head-card'>+ 10</div>
                                <div className='type-card'>FITNESS PROGRAMS</div>
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div >
                        <img className='photo-boy-home' src={boy}/>
                    </div>

                        {/* buttons */}
                    <div className='buttons'>
                        <button className='btn1'>Get Started</button>
                        <button className='btn2'> Learn more</button>
                    </div>
                </div>

            </div>

            {/* right part */}
            <div className='right-hero'>
                <button>
                    Join Now
                </button>

                <div className='heart-home'>
                    <div className='heart-icon'><AiFillHeart/></div>
                    <div>Heart Rate</div>
                    <div>116 bpm</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection