import React, {Component} from 'react';
import Aux from '../../hoc/Aus';
import Burger from '../../components/Layout/Burger/Burger';  //there is issue here but I don't know what the issue is.

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;