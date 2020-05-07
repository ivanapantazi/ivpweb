import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from '../../components/baffle-text'
import AnimationContainer from '../../components/animation-container'
import Slider from 'react-slick'
import ThemeContext from '../../context'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Ivana from '../../assets/img/team-1.jpg';
import Angelica from '../../assets/img/team-2.jpg';
import Stergios from '../../assets/img/team-3.jpg';

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
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
        className="team"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Who we are</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="Meet the team"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="team-container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.4
                      : 'auto',
                }}
              >
                <Container>
                  {this.team_slider()}
                </Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    )
  }

  team_slider() {
    const settings = {
      dots: true,
      swipe: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      loop: true,
    }
    if (this.state.show) {
      return (
        <AnimationContainer delay={100} animation="fadeIn slow">
          <Slider {...settings}>
          <div className="team-member">
            <h2>Ivana Pantazi</h2>
              <div className="team-member-content">
                <img src={Ivana} alt="Ivana Pantazi" />
                <h4>CEO/Front End Web Developer</h4>
                <div className="social social_icons">
                    <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com')}/>
                    <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                    <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                    <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
                </div>
              </div>  
            </div>
            <div className="team-member">
              <h2>Angelica Koumanakou</h2>
              <div className="team-member-content">
                <img src={Angelica} alt="Angelica Koumanakou" />
                <h4>Illustrator/Digital Designer</h4>
                <div className="social social_icons">
                    <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com')}/>
                    <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                    <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                    <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
                </div>
              </div>
            </div>
            <div className="team-member">
            <h2>Stergios Zissakis</h2>
              <div className="team-member-content">
                <img src={Stergios} alt="Stergios Zissakis" />
                <h4>Back End Developer/Programmer</h4>
              </div>
            </div>
          </Slider>
        </AnimationContainer>
      )
    }
  }
}

export default Team