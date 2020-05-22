import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from '../../components/animation-container'
import BaffleText from '../../components/baffle-text'
import ThemeContext from '../../context'
import Gallery from './gallery'


class Portfolio extends React.Component {
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
        className="portfolio"
        style={{ height: this.context.height }}
        tabIndex="0"
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Portfolio"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.show}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={10} className="recent-works">
            <div className="line-text">
                <h4>See our work</h4>
              </div>
              <AnimationContainer delay={100} animation="fadeIn slow">
                  <Gallery/>
              </AnimationContainer>            
          </Col>
        </Row>
      </section>
    )
  }

}

export default Portfolio