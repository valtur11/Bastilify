import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Form extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.addedProducts,
        total: state.cartReducer.total
    }
}

export default connect(mapStateToProps)(Form);