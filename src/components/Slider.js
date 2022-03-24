import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@mui/styles'
import { imageData } from '../constants/Data'

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#ddd",
    },
    img: {
        width: '100%',
        height: "300px"
    }
})

export default function Slider() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Carousel
                navButtonsProps={{
                    style: {
                        backgroundColor: '#fff',
                        borderRadius: 3,
                        fontSize: 25,
                        color: '#000',
                        padding: '35px 12px',
                        opacity: 1
                    }
                }}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
            >
                {
                    imageData.map((image, i) => (
                        <div style={{ marginTop: "10px", backgroundColor: "#fff" }}>
                            <img key={i} src={image} className={classes.img} />
                        </div>

                    ))
                }
            </Carousel>
        </div>
    )
}
