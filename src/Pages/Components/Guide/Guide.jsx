import { Carousel } from "react-bootstrap";
import first from '../../../asset/first.jpg'
import second from '../../../asset/second.jpg'
import third from '../../../asset/third.jpg'
import './Guide.css'

const Guide = () => {
    return (
        <Carousel fade className="slide" variant="dark">
            <Carousel.Item>
                <img
                    src={first}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={second}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={third}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Guide