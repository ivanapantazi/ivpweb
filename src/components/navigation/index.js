import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import AnimationContainer from '../../components/animation-container'

var scrollToElement = require('scroll-to-element')

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.sections = [
            {
                name: "Home"
            },
            {
                name: "About"
            },
            {
                name: "Services"
            },
            {
                name: "Portfolio"
            },
            {
                name: "Team"
            },
            {
                name: "Contact"
            }
        ]
    }

    navScroll(id, v) {
        
        this.setState({show: false})
        const el = document.getElementById(id)
        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
          }).on('end', () => {
            this.props.change(v)
        });
    }


    render() {
        return(
            <nav>
                <div className="opener">
                    <FontAwesomeIcon icon={faBars} className="closeNav" onClick={() => this.setState({show: true})} />
                </div>
                <div className={`navigation ${this.state.show ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faTimes} className="closeNav" onClick={() => this.setState({show: false})} />
                    <div className="links">
                        <ul>
                            <AnimationContainer delay={300} animation="fadeIn slow">
                                <div className="corner-box"></div>
                            </AnimationContainer>
                            {this.items()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    items() {
        return this.sections.map((value, index) => {
            return (
                <li key={index}>
                    <span onClick={() => this.navScroll(value.name.toLowerCase(), index)}>{value.name}</span>
                </li>
            )
        })
    }
}
export default Navigation