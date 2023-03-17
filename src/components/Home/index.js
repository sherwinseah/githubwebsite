import './index.scss'
// import LogoTitle from '../../assets/images/logo-s.png'
import portraitImgBW from '../../assets/images/portrait.png'
import portraitImgColor from '../../assets/images/portrait.jpg'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [screenWidth, setWidthState] = useState(true)
    const nameArray = [' ', 'S', 'h', 'e', 'r', 'w', 'i', 'n', ',']
    const jobArray = ['A', ' ', 'Q', 'u', 'a', 'n', 't', 'i', 't', 'a', 't', 'i', 'v', 'e', ' ', 'A', 'n', 'a', 'l', 'y', 's', 't']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
        return () => clearTimeout(timer)
    }, [])


    useEffect(() => {
        if (window.innerWidth < 970) {
            setWidthState(false)
        }
        else {
            setWidthState(true)
        }
    }, [screenWidth])

    return(
        screenWidth ?
        <>
            <div className='home-page'>
                <div className='text-zone'>
                    {/* <div className='typewriter'>
                        <h1>
                            Hi, 
                            <br/>
                            I'm Sherwin, 
                            <br/>
                            A Quantitative Analyst
                        </h1>
                    </div> */}
                    <h1>
                    <span className={`${letterClass} _11`}>Hi</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    {/* <img src={LogoTitle} alt='developer'></img> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16}/>
                    </h1>
                    <h2>Data Engineer / Data Scientist / Machine Learning / Artificial Intelligence</h2>
                    <Link to="/contact" className='flat-button'>CONTACT</Link>
                </div>
                {/* <div className='logo-container'> */}
                <img className='portrait' src={portraitImgBW} alt='portrait' />
                {/* </div> */}
            </div>
            <Loader type='pacman' />
        </> :
        <>
        <div className='home-page2'>
            <div className='text-zone2'>
                {/* <div className='typewriter'>
                    <h1>
                        Hi, 
                        <br/>
                        I'm Sherwin, 
                        <br/>
                        A Quantitative Analyst
                    </h1>
                </div> */}
                <h1>
                <span className={`${letterClass} _11`}>Hi</span>
                <span className={`${letterClass} _12`}>,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                {/* <img src={LogoTitle} alt='developer'></img> */}
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16}/>
                </h1>
                <h2>Data Engineer / Data Scientist / Machine Learning / Artificial Intelligence</h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
        </div>
        <Loader type='pacman' />
    </> 
    )
}

export default Home