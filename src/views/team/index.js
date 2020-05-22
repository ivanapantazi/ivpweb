import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BaffleText from '../../components/baffle-text'
import AnimationContainer from '../../components/animation-container'
import Slider from 'react-slick'
import ThemeContext from '../../context'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Ivana from '../../assets/img/team/ivana.jpg';
import Angelica from '../../assets/img/team/angelica.jpg';
import Stergios from '../../assets/img/team/stergios.jpg';


class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.items = [
      {
          name: require("../../assets/img/clients/heineken.svg")
      },
      {
          name: require("../../assets/img/clients/KPMG.svg")
      },
      {
        name: require("../../assets/img/clients/lloyds.svg")
      },
      {
        name: require("../../assets/img/clients/Vertex.svg")
      },
      {
        name: require("../../assets/img/clients/WPP.svg")
      },
      {
        name: require("../../assets/img/clients/brc.svg")
      }
    ]

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
        tabIndex="0"
      >
        <Row>
          <div className="content">
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
                className="team-container">
                  {this.team_members()}         
              </div>
          </div>
        </Row>
        <Row className="bottom">{this.clients()}</Row>
      </section>
    )
  }

  clients() {
    if (this.state.show || this.context.height === 'auto') {
      return this.items.map((value, index) => {
        return (
          <Col md={2} className="client" key={index}>
            <AnimationContainer delay={100} animation="fadeIn slow">
              <img src={value.name} alt="client" />
            </AnimationContainer>
          </Col>
        )
      })
    }
  }


  team_members(){
    return (
      <AnimationContainer delay={200} animation="fadeIn slow">
        <div className="team-member">
          <h3>Ivana Pantazi</h3>
            <div className="team-member-content">
              <img src={Ivana} alt="Ivana Pantazi" />
              <p>CEO/Front End Web Developer</p>
              <div className="social social_icons">
                  <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com')}/>
                  <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                  <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                  <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
              </div>
            </div>  
          </div>
          <div className="team-member">
            <h3>Angelica Koumanakou</h3>
            <div className="team-member-content">
              <img src={Angelica} alt="Angelica Koumanakou" />
              <p>Illustrator/Digital Designer</p>
              <div className="social social_icons">
                  <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com')}/>
                  <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                  <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                  <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
              </div>
            </div>
          </div>
          <div className="team-member">
          <h3>Stergios Zissakis</h3>
            <div className="team-member-content">
              <img src={Stergios} alt="Stergios Zissakis" />
              <p>Back End Developer/Programmer</p>
            </div>
          </div>
      </AnimationContainer>
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