import React from 'react'
import {Link} from 'react-router-dom'


class page404 extends React.Component {

    render() {
        return(
           
        <div className="error-404">
            <div>
                <h1>404</h1>
                <h2>The page you are looking for could not be found</h2>
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>
        )
    }
}

export default page404
