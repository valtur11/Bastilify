import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContainerTop extends React.Component {
    render() {
        return(
            <div>
                <div className="overlay"></div>
                <div className="container-fluid  top_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-xs-12 status">
                                <ul>
                                    <li>Open 24/7</li>
                                    <li><FontAwesomeIcon icon="phone" />Shop service: +91 98-765-4321</li>
        
                                </ul>
                            </div>
                            <div className="col-md-5 col-xs-12 sign_log">
                                <ul>
                                    <li><a href="#">Log in</a></li>
                                    <li>Country:<span>BG</span></li>
                                    <li>Locaton:<span>Sofia</span></li>
                                    <li className="social"><FontAwesomeIcon icon={['fab', 'facebook']} /> </li>
                                    <li className="social"><FontAwesomeIcon icon={['fab', 'twitter']} /> </li>
                                    <li className="social"><FontAwesomeIcon icon={['fab', 'instagram']} /> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContainerTop