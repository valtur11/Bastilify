import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {
    render(){
        return(
            <div>
              <div className="navbar">
                <Link href="/"><div className="logo">Bastilify</div></Link>
                <div className="navlinks" id="nav">
                    <FontAwesomeIcon className="times" icon="times" />
                    <Link href="/"><div className="links">Home</div></Link>
                    <Link href="/convert"><div className="links">Convert</div></Link>
                    <Link href="/test"><div className="links">Test</div></Link>
                    <Link href="/test"><div className="links">Test</div></Link>
                </div>
                <FontAwesomeIcon className="burger" icon="bars" />
              </div>
            </div>
        )
    }
}

export default Navbar