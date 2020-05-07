import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AnimationContainer from '../../components/animation-container'

import {
  faSmileBeam,
  faTasks,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from '../../components/counter'
import ThemeContext from '../../context'

class About extends React.Component {
  
    static contextType = ThemeContext
    
    render() {
        return (
            <section id={`${this.props.id}`} className="about">
               
                <Row>
                    <Col md={8} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Us</h4>
                            </div>
                            <h1>Story</h1>
                            <p>Founded in 2008 by Ivana Pantazi, IvP Web Services ltd is a web development company that provide affordable high quality web design and web development services n UK &amp; Europe. At present, the head quarter is located in London and there is a regional office in Athens, Greece.</p>
                            <p>The guiding principle behind our services is to provide all the expertise, creative innovation, commitment, resources and support to provide effective solutions to our customers. We have a range of web design and development services for business at all stages, from start-up business to long established businesses and organisations. We are expert in all types of projects from large IT projects to web based projects and have a team of experienced designers and developers that also provide consultancy services to our customers.</p>
                            <p>Don't hesitate to contact us for a quote!</p>
                        </div>
                    </Col>
                    <Col md={4} className="skills">
                    
                    <Container>
                    <div className="line-text">
                        <h4>Facts</h4>
                    </div>
                        <Col md={12}>
                            <AnimationContainer delay={100} animation="fadeIn fast">
                            <Counter
                                icon={faSmileBeam}
                                value={50}
                                text="Happy Clients"
                                symbol="+"
                                duration={3}
                            />
                            </AnimationContainer>
                        </Col>
                        <Col md={12}>
                            <AnimationContainer delay={100} animation="fadeIn fast">
                            <Counter
                                icon={faTasks}
                                value={40}
                                text="Projects Delivered"
                                symbol="+"
                                duration={3}
                            />
                            </AnimationContainer>
                        </Col>
                        <Col md={12}>
                            <AnimationContainer delay={100} animation="fadeIn fast">
                            <Counter
                                icon={faQuoteRight}
                                value={30}
                                text="Reviews"
                                symbol="+"
                                duration={3}
                            />
                            </AnimationContainer>
                        </Col>
                        <Col md={12}>
                            <AnimationContainer delay={100} animation="fadeIn fast">
                            <Counter
                                icon={faCode}
                                value={5000}
                                text="Lines of Code"
                                symbol="+"
                                duration={3}
                            />
                            </AnimationContainer>
                        </Col>
                        </Container>
                    </Col>
                </Row>
            </section>
        )
    }

}

export default About