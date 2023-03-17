import { faCss3, faGitAlt, faHtml5, faPython, faReact, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faBlender, faBlenderPhone, faChartArea, faChartSimple, faNetworkWired, faR } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import resume from '../../assets/Sherwin Seah_Resume.pdf'
import './index.scss'

const About = () => {

    const [screenWidth, setWidthState] = useState(true)
    const [screenHeight, setHeightState] = useState(true)
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
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

    useEffect(() => {
        if (window.innerHeight < 623) {
            setHeightState(false)
        }
        else {
            setHeightState(true)
        }
    }, [screenHeight])

    return (
        (screenWidth && screenHeight) ?
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        ></AnimatedLetters>
                    </h1>
                    <p>
                    I am a senior on track to graduate from Singapore University of Technology and Design in August 2023 with my bachelor's degree in Engineering with a focus track in Financial Engineering and a minor in Artificial Intelligence and a Masters in Technology and Entrepreneurship.
                    </p>  
                    <p>  
                    I have a keen interest in Finance and Technology. My aim is to become a full time Quantitative Analyst, Software Developer or Trader. Being creative and passionate, I believe I would be able to look for interesting investment strategies and execute trades swiftly when I see an opportunity. I ensure that I am always meticulous in my work and complete them with a high standard. 
                    </p>  
                    <p> 
                    I enjoy being a good team player who can lead and help others in team projects when needed. I believe I am able to communicate well and receive constructive criticism to adapt accordingly.
                    </p>
                    <a className="flat-button" href={resume} download = "Sherwin Seah_Resume.pdf">
                    DOWNLOAD RESUME
                    </a>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FontAwesomeIcon icon={faPython}  /> {/*color="#DD0031"*/} 
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faChartSimple}  /> {/*color="#F06529"*/} 
                        </div>
                        <div className="face3">
                        <FontAwesomeIcon icon={faRProject}  /> {/*color="#28A4D9"*/} 
                        </div>
                        <div className="face4">
                        <FontAwesomeIcon icon={faReact}  /> {/*color="#5ED4F4"*/} 
                        </div>
                        <div className="face5">
                        <FontAwesomeIcon icon={faChartArea}  /> {/*color="#EFD81D"*/} 
                        </div>
                        <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt}  /> {/*color="#EC4D28"*/} 
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </> :
        (!screenWidth & screenHeight) ?
        <>
        <div className='container about-page2'>
            <div className='text-zone2'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    ></AnimatedLetters>
                </h1>
                <p>
                I am a senior on track to graduate from Singapore University of Technology and Design in August 2023 with my bachelor's degree in Engineering with a focus track in Financial Engineering and a minor in Artificial Intelligence and a Masters in Technology and Entrepreneurship.
                </p>  
                <p>  
                I have a keen interest in Finance and Technology. My aim is to become a full time Quantitative Analyst, Software Developer or Trader. Being creative and passionate, I believe I would be able to look for interesting investment strategies and execute trades swiftly when I see an opportunity. I ensure that I am always meticulous in my work and complete them with a high standard. 
                </p>  
                <p> 
                I enjoy being a good team player who can lead and help others in team projects when needed. I believe I am able to communicate well and receive constructive criticism to adapt accordingly.
                </p>
                <a className="flat-button" href={resume} download = "Sherwin Seah_Resume.pdf">
                DOWNLOAD RESUME
                </a>
            </div>

        </div>
        <Loader type='pacman' />
    </> :
        <>
        <div className='container about-page3'>
            <div className='text-zone3'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    ></AnimatedLetters>
                </h1>
                <p>
                I am a senior on track to graduate from Singapore University of Technology and Design in August 2023 with my bachelor's degree in Engineering with a focus track in Financial Engineering and a minor in Artificial Intelligence and a Masters in Technology and Entrepreneurship.
                </p>  
                <p>  
                I have a keen interest in Finance and Technology. My aim is to become a full time Quantitative Analyst, Software Developer or Trader. Being creative and passionate, I believe I would be able to look for interesting investment strategies and execute trades swiftly when I see an opportunity. I ensure that I am always meticulous in my work and complete them with a high standard. 
                </p>  
                <p> 
                I enjoy being a good team player who can lead and help others in team projects when needed. I believe I am able to communicate well and receive constructive criticism to adapt accordingly.
                </p>
                <a className="flat-button" href={resume} download = "Sherwin Seah_Resume.pdf">
                DOWNLOAD RESUME
                </a>
            </div>

        </div>
        <Loader type='pacman' />
    </>
    )
}

export default About