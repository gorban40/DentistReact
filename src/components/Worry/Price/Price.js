import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { motion } from 'framer-motion';

import './Price.scss';

const Price = () => {
    return (
        <motion.section id="price" className="price"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
            <Container>
                <Row id="#price">
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="price__border">
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                                <span>500 ₴</span>
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                                <span>500 ₴</span>
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                    <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                                <span>500 ₴</span>
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                                <span>500 ₴</span>
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                        <Row className="price__wrapper">
                            <Col className="price__title">Наліт на зубах</Col>
                            <Col className="price__price">
                                      450 ₴
                                <span>500 ₴</span>
                            </Col>
                            <Col className="price__time">2 часа</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </motion.section>
    )
}

export default Price;