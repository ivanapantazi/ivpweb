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
  
    constructor(props) {
        super(props)
        this.state = {
          show: false,
        }
        this.show = this.show.bind(this)
      }
    
      static contextType = ThemeContext
    
      show() {
        this.setState({ show: true })
      }
    
    render() {
        return (
            <section id={`${this.props.id}`} 
            className="about" 
            style={{ height: this.context.height }}
            tabIndex="0"
            >
               
                <Row>
                    <Col md={8} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Us</h4>
                            </div>
                            <h1>We provide great services and ideas</h1>
                            <p>Founded in 2008 by Ivana Pantazi, IvP Web Services ltd is a web development company that provide affordable high quality web design and web development services n UK &amp; Europe. At present, the head quarter is located in London and there is a regional office in Athens, Greece. We work as an incorporated resolution providers for all type of clients from micro to macro customers.</p>
                            <p>Our main focus is to satisfy our clients with high quality services. We have a range of web design and development services for business at all stages, from start-up business to long established businesses and organisations. We are expert in all types of projects from large IT projects to web based projects and have a team of experienced designers and developers that also provide consultancy services to our customers.</p>
                            <p>The guiding principle behind our services is to provide all the expertise, creative innovation, commitment, resources and support to provide effective solutions to our customers. Moreover, one of our key points is to deliver all the projects with certainty of time and cost.</p>
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
                                value={25}
                                text="Happy Clients"
                                symbol="+"
                                duration={6}
                            />
                            </AnimationContainer>
                        </Col>
                        <Col md={12}>
                            <AnimationContainer delay={100} animation="fadeIn fast">
                            <Counter
                                icon={faTasks}
                                value={60}
                                text="Projects Delivered"
                                symbol="+"
                                duration={5}
                            />
                            </AnimationContainer>
                        </Col>
                        <Col md={12}>
                            <AnimationContainer delay={100} animation="fadeIn fast">
                            <Counter
                                icon={faQuoteRight}
                                value={15}
                                text="Reviews"
                                symbol="+"
                                duration={6}
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