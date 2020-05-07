import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Progress from '../../components/progress'
import ThemeContext from '../../context'

class About extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about">
               
                <Row>
                    <Col md={7} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Us</h4>
                            </div>
                            <h1>Story</h1>
                            <p>Founded in 2008 by Ivana Pantazi, IvP Web Services ltd is a web development company that provide affordable high quality web design and web development services n UK &amp; Europe. At present, the head quarter is located in London and there is a regional office in Athens, Greece.</p>
                            <p>The guiding principle behind our services is to provide all the expertise, creative innovation, commitment, resources and support to provide effective solutions to our customers. We have a range of web design and development services for business at all stages, from start-up business to long established businesses and organisations. We are expert in all types of projects from large IT projects to web based projects and have a team of experienced designers and developers that also provide consultancy services to our customers.</p>
                        </div>
                    </Col>
                    <Col md={5} className="skills">
                            <div className="skills-container">
                                <Progress name="Web Development" value={90} delay={1100} />
                                <Progress name="Graphic Design" value={50} delay={1100} />
                                <Progress name="Illustration" value={80} delay={1100} />
                                <Progress name="Project Management" value={40} delay={1100} />
                                <Progress name="Testing" value={100} delay={1100} />
                                <Progress name="Maintenance" value={50} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

}

export default About