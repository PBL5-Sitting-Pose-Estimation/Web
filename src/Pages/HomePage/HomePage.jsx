import { useContext, useEffect, useRef } from 'react'
import posee from '../../asset/login.png'
import Title from '../Components/Title/Title'
import './HomePage.css'
import { AuthContext } from '../../Context/AuthContext'
import Guide from '../Components/Guide/Guide'

const HomePage = () => {
    const authContext = useContext(AuthContext)

    const topRef = useRef(null)
    const botRef = useRef(null)

    const wheelTimeout = useRef()

    useEffect(() => {
        const cancelWheel = e => wheelTimeout.current && e.preventDefault()
        document.body.addEventListener('wheel', cancelWheel, { passive: false })
        return () => document.body.removeEventListener('wheel', cancelWheel)
    }, [])

    useEffect(() => {
        authContext.loadUser()
    }, [])

    const handleScroll = (event) => {
        clearTimeout(wheelTimeout.current)

        wheelTimeout.current = setTimeout(() => {
            wheelTimeout.current = false
        }, 300)

        if (event.deltaY < 0) {
            window.scrollTo({
                top: topRef.current.offsetTop,
                behavior: 'smooth'
            })
        }
        else {
            window.scrollTo({
                top: botRef.current.offsetTop,
                behavior: 'smooth'
            })
        }

    }

    return (
        <div ref={topRef} onWheel={handleScroll}>
            <Title />
            <div className='landing-container' onScrollCapture={handleScroll}>
                <div className='landing'>
                    <div className='intro'>
                        <h1>POSE ESTIMATION</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque officiis dicta consequuntur eius deserunt et quam dolores beatae incidunt fuga! Magni tenetur, eum harum et alias odit quo quasi atque.</p>
                    </div>
                    <div className='navigator bounce2'>
                        <p style={{marginBottom: '5px'}}>Scroll down for tutorial</p>
                        <i className="fa-solid fa-angles-down"></i>
                    </div>
                    <img src={posee} className='cover-img' alt=''/>
                </div>
                <Guide />
            </div>
            <div ref={botRef} style={{
                position: "absolute",
                top: "calc(200% - 75px)"
            }}></div>
        </div>
    )
}

export default HomePage