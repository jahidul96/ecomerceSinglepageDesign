import React from 'react'
import { Button, Divider } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@mui/styles';
import { AllProducts } from '../constants/Data';

const useStyles = makeStyles({
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: "10px"
    },

})
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Products({ title }) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.textContainer}>
                <h2>{title}</h2>
                <Button variant="contained">View All</Button>
            </div>
            <Divider />
            <div style={{ padding: "25px" }}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                >
                    {
                        AllProducts.map(all => (
                            <div style={{ textAlign: 'center', padding: '15px' }}>
                                <div>
                                    <img src={all.imgUrl} style={{ width: '100%', height: '170px' }} />
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <h4 style={{ margin: "10px 0px" }}>{all.title}</h4>
                                    <p style={{ margin: "10px 0px", color: 'green' }}>{all.disc}</p>
                                    <h5>{all.now}</h5>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
