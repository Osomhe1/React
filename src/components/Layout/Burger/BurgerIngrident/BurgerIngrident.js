import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './burgerIngrident.css';


class BurgerIngrident extends Component{
    render() {
        let ingrident = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingrident = <div className={classes.BreadBottom}></div>;
                break; 
            case ('bread-top'):
                ingrident = (
                    <div className={classes.BreadTop}>
                        <div className={classes.seeds1}></div>
                        <div className={classes.seeds2}></div>
                    </div>
                );
                break;
            case ('meat'): 
            ingrident = 
                <div className={classes.meat}></div>;
                break;
            case ('salad'): 
            ingrident = 
               <div className={classes.salad}></div>;
               break;
            case ('bacon'): 
                  ingrident = (
                      <div className={classes.bacon}></div>
                  )
                  break;
            case ('cheese'): 
                  ingrident = (
                      <div className={classes.cheese}></div>
                  )
                  break; 
            default: ingrident = null;           
            
        }
         return ingrident;
    

    }


}

BurgerIngrident.propTypes = {
    type: this.PropTypes.string.isRequired
}


export default BurgerIngrident;