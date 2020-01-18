import React from 'react';
import axios from 'axios';

class Products extends React.Component{
    async getDataAxios(){
        const response = 
        await axios.get("https://010dfc69-4095-4590-9977-9e177c1aaf2a.mock.pstmn.io/api/products?fbclid=IwAR3WCxZ3ueN1Xi2d6aiFE2BDsgyaDvh72ogGOQM-yYgQCtfj-_jC6335wVA")
        
        console.log(response.data);
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Products