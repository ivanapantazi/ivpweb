import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
import AnimationContainer from '../../components/animation-container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,
  faDrupal,
  faGithub,
  faSass,
  faCss3,
  faWordpress,
  faNodeJs,
  faCodepen,
  faInternetExplorer } from '@fortawesome/free-brands-svg-icons'

  import {
    faCode,  
  } from '@fortawesome/free-solid-svg-icons'

var scrollToElement = require('scroll-to-element')

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.items = [
      {
          name: faReact
      },
      {
          name: faDrupal
      },
      {
          name: faGithub
      },
      {
          name: faSass
      },
      {
          name: faCss3
      },
      {
          name: faWordpress
      },
      {
        name: faNodeJs
      },
      {
        name: faCodepen
      },
      {
        name: faCode
      },
      {
        name: faInternetExplorer
      }
    ]
  }

  static contextType = ThemeContext
  navScroll = () => {
    var elem = document.querySelector('.about');
    scrollToElement(elem, {
      offset: 0,
      ease: 'in-out-expo',
      duration: 2000
    });
  };

  showIcons() {
    return this.items.map((value, index) => {
        return (
          <FontAwesomeIcon
          icon={value.name}
            className={`move-${
              Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
            } float-image`}
            style={{
              left: `${index * 8}%`,
              top: `${Math.random() *
                (+(index % 2 === 0 ? 50 : 20) - +(index % 2 === 0 ? 70 : 10)) +
                +(index % 2 === 0 ? 70 : 10)}%`,
            }}
            alt="shape"
            key={index}/>
        )
    })
  }


  render() {

    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={7} className="content">
            <div className="content-text">
              <AnimationContainer delay={800} animation="fadeIn slow">
                <h2>WE create</h2>
              </AnimationContainer>
              <Typewriter
                options={{
                  strings: [
                    'Functional Websites',
                    'Awesome Mobile Apps',
                    'Beautiful Graphics',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <button className="hover-button" onClick={this.navScroll}>
                  <span>Start scrolling</span>
              </button>
            </div>
     
          </Col>
          <Col md={5} className="images-wrapper">
            <AnimationContainer delay={800} animation="fadeIn slow">
              {this.showIcons()}
            </AnimationContainer>
          </Col>
        </Row>
      </section>
    )
  }

}

export default Hero