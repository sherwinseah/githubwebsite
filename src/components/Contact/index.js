import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {

    const [screenWidth, setWidthState] = useState(true)
    const [screenHeight, setHeightState] = useState(true)
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef

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

    return(
        (screenWidth && screenHeight) ?
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        <b>Message me on Linkedin:</b>  
                        <a className='link' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sherwinseah/'>
                            HERE
                        </a>
                    </p>
                    <p>
                        <b>Email me at:</b> sherwin_seah@mymail.sutd.edu.sg
                    </p>
                    <p>
                        <b>Message me on WhatsApp:</b> +65 9817 1783
                    </p>
                    <p>
                        <b>Message me on Telegram:</b> @sherwinseah
                    </p>
                    {/* <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='text' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div> */}
                </div>
            </div>
            <Loader type='pacman'/>
        </> :
        (!screenWidth & screenHeight) ?
        <>
        <div className='container contact-page2'>
            <div className='text-zone2'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Message me on Linkedin:  
                    <a className='link' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sherwinseah/'>
                        HERE
                    </a>
                </p>
                <p>
                    Drop me an Email: sherwin_seah@mymail.sutd.edu.sg
                </p>
                <p>
                    Drop me a Message on WhatsApp: +65 9817 1783
                </p>
                <p>
                    Drop me a Message on Telegram: @sherwinseah
                </p>
                {/* <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div> */}
            </div>
        </div>
        <Loader type='pacman'/>
    </>
    :
    <>
    <div className='container contact-page3'>
        <div className='text-zone3'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                Message me on Linkedin:  
                <a className='link' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sherwinseah/'>
                    HERE
                </a>
            </p>
            <p>
                Drop me an Email: sherwin_seah@mymail.sutd.edu.sg
            </p>
            <p>
                Drop me a Message on WhatsApp: +65 9817 1783
            </p>
            <p>
                Drop me a Message on Telegram: @sherwinseah
            </p>
            {/* <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type='text' name='email' placeholder='Email' required />
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea name='message' placeholder='Message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
            </div> */}
        </div>
    </div>
    <Loader type='pacman'/>
</>
    )
}

export default Contact