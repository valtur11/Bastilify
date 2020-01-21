import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    render(){
        return(
            <div>
                <footer className="footer"> 
                    <p className="final-p">Footer</p>
                    {/*
                    <li className="social"><FontAwesomeIcon icon={['fab', 'facebook']} /> </li>
                    <li className="social"><FontAwesomeIcon icon={['fab', 'twitter']} /> </li>
                    <li className="social"><FontAwesomeIcon icon={['fab', 'instagram']} /> </li>
                    */}
                </footer>
            </div>
        )
    }
}

export default Footer