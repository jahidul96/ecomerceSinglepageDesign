import React from 'react';
import { makeStyles } from '@mui/styles';

import { Divider } from '@mui/material';

// componets
import ItemSlide from '../components/ItemSlide';
import Nav from '../components/Nav';
import Products from '../components/Products';
import Slider from '../components/Slider';

const useStyles = makeStyles({
    productWrapper: {
        backgroundColor: "#fff",
        margin: "10px 10px",
        overflow: 'hidden'
    },
    detailsContainer: {
        backgroundColor: '#151D3B',
        color: '#fff',
        padding: 50
    },
    footer: {
        backgroundColor: '#21325E',
        marginTop: -10,
        padding: 30,
        color: '#fff',
        textAlign: 'center'
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div style={{ backgroundColor: "#ddd" }}>
            <Nav />
            <ItemSlide />
            <Slider />
            <div className={classes.productWrapper}>
                <Products title="Back to Office Essentials" />
            </div>
            <div className={classes.productWrapper}>
                <Products title="Trending Offers" />
            </div>
            <div className={classes.productWrapper}>
                <Products title="Summer '22 Essentials" />
            </div>
            <div className={classes.productWrapper}>
                <Products title="Auto Accessories" />
            </div>
            <div className={classes.productWrapper}>
                <Products title="Top Rated Appliances For You" />
            </div>
            <div className={classes.footer}>
                <p>ALL Right Reseverd by SellandBuyBD. </p>
            </div>
        </div>


    );
}

export default Home;
