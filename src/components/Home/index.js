import './index.scss'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'S', 'h', 'e', 'r', 'w', 'i', 'n', ',']
    const jobArray = ['A', ' ', 'Q', 'u', 'a', 'n', 't', 'i', 't', 'a', 't', 'i', 'v', 'e', ' ', 'A', 'n', 'a', 'l', 'y', 's', 't']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return(
        <div className='container home-page'>
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
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
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
            <Logo />
        </div>
    )
}

export default Home