import { useContext, useEffect } from 'react'
import posee from '../../asset/posee.jpg'
import Title from '../Components/Title/Title'
import './HomePage.css'
import { AuthContext } from '../../Context/AuthContext'
import Guide from '../Components/Guide/Guide'

const HomePage = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser()
    }, [])

    return (
        <div>
            <Title />
            <div className='landing-container'>
                <div className='landing'>
                    <div className='intro'>
                        <h1>POSE ESTIMATION</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque officiis dicta consequuntur eius deserunt et quam dolores beatae incidunt fuga! Magni tenetur, eum harum et alias odit quo quasi atque.</p>
                    </div>
                    <img src={posee} className='cover-img'/>
                </div>
                <Guide />
            </div>
        </div>
    )
}

export default HomePage