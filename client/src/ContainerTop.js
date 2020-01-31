import React from 'react'

class ContainerTop extends React.Component {

    render() {
        return(
            <div className="container-fluid  top_header">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-xs-12 status">
                                <ul>
                                    <li>Open 24/7</li>
                                    <li>Shop service: +555-555</li>
        
                                </ul>
                            </div>
                            <div className="col-md-5 col-xs-12 sign_log">
                            
                                <ul>
                                    
                                    <li><a href="#">Log In</a></li>
                                                                   
                                    <li>Country:<span>BG</span></li>                                   
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