import React from 'react'

import Scrollspy from 'react-scrollspy'

var scrollToElement = require('scroll-to-element')

class NavSpy extends React.Component {
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
            <div className="right-nav">
                 <Scrollspy items={ ['home', 'about', 'services','portfolio','team','contact'] } currentClassName="active">
                  {this.items()}
                 </Scrollspy>
            </div>
        )
    }

    items() {
        return this.sections.map((value, index) => {
            return (
                <li key={index}>
                    <span onClick={() => this.navScroll(value.name.toLowerCase(), index)}></span>
                </li>
            )
        })
    }
}
export default NavSpy