import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Logo from '../../assets/img/logo.svg'

var scrollToElement = require('scroll-to-element')

class Header extends React.Component {

  navScroll = () => {
    var elem = document.querySelector('.hero');
    scrollToElement(elem, {
      offset: 0,
      ease: 'in-out-expo',
      duration: 2000
    });
  };

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="header"
        tabIndex="0"
      >
        <Row>
          <Col md={12} className="content">
            <img onClick={this.navScroll} className="logo" src={Logo} alt="logo"/>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Header