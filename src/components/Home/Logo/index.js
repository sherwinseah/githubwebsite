import './index.scss'
import portraitImgBW from '../../../assets/images/portrait.png'
import portraitImgColor from '../../../assets/images/portrait.jpg'


const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='bw-portrait' src={portraitImgBW} alt='portrait' />
        </div>
    )
}

export default Logo