import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from '../../components/baffle-text'
import AnimationContainer from '../../components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faPencilRuler,
  faChalkboardTeacher,
  faClipboardCheck,
  faCogs,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../context'

class Services extends React.Component {
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
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What We Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h4>Web development</h4>
              <p>
              We have a wide range of web development services from start-up business to long established businesses
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
              <h4>Business needs</h4>
              <p>
              We have set out service levels which will help you identify the type of development that suits your business needs best
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} />
              </div>
              <h4>UI/UX Design</h4>
              <p>
              We offer supreme design quality, transforming design ideas and illustrations into functional reality
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="solid" />
              </div>
              <h4>Project management</h4>
              <p>
              We provide Project management services to our clients from the start of the project, to Testing and Going Live
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faCogs} className="solid" />
              </div>
              <h4>Quality and support</h4>
              <p>
              All our projects are backed by qualified technical expertise of the highest caliber ensuring best quality and support
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faLightbulb} className="solid" />
              </div>
              <h4>Different solutions</h4>
              <p>
              We can offer a range of different website packages, including modern single page websites
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }
}

export default Services
