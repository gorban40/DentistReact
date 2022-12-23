import { Container } from "react-bootstrap";
import Slider from "./Slider/Slider";
import Logo from "./Logo/Logo";
import Contacts from "./Contacts/Contacts";


import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";


import './Promo.scss'

const Promo = () => {
    return (
        <header id="promo"  className="promo">
            <Container>
                <div className="promo__menu">
                    <Logo />
                </div>
                <div className="promo__main">
                    <Row>
                        <Col xxl={9} xl={8} lg={12}>
                            <Slider />
                        </Col>
                        <Col xxl={3} xl={4} lg={12}>
                            <Contacts />
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )
}

export default Promo;