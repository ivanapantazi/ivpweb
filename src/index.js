import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/layout'
import Spinner from './components/spinner'
import Header from './views/header'
import Hero from './views/hero'
import About from './views/about'
import Portfolio from './views/portfolio'
import Services from './views/services'
import Team from './views/team'
import Contact from './views/contact'

class App extends React.Component {

  render() {
    return (
        <React.Fragment> 
            <Layout>
                <Header id="header" />
                <Hero id="home" />
                <About id="about" />
                <Services id="services" />
                <Portfolio id="portfolio" />
                <div className="divider"></div>
                <Team id="team" />
                <Contact id="contact" />
            </Layout>
            <Spinner duration={1000} />
      </React.Fragment>
    )
  }
}


export default App;

ReactDOM.render(< App />, document.getElementById('root'));


