import posee from '../../asset/posee.jpg'
import Title from '../Components/Title/Title'
import './HomePage.css'

const HomePage = () => {

    return (
        <div>
            <Title />
            <div className='landing'>
                <div className='intro'>
                    <h1>POSE ESTIMATION</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque officiis dicta consequuntur eius deserunt et quam dolores beatae incidunt fuga! Magni tenetur, eum harum et alias odit quo quasi atque.</p>
                </div>
                <img src={posee} className='cover-img' />
            </div>
        </div>
    )
}

export default HomePage