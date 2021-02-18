import React from 'react';
import classes from './Burger.css';
import BurgerIngrident from './BurgerIngrident/BurgerIngrident';

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngrident type='bread-top' />
            <BurgerIngrident type='cheese' />
            <BurgerIngrident type='meat' />
            <BurgerIngrident type='salad' />
            <BurgerIngrident type='bread-bottom' />

        </div>
    );
};

export default burger