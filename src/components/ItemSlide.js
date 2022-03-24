import React from 'react'
import { Products } from '../constants/Data'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: "10px 40px",
        backgroundColor: '#fff'
    }
})


export default function ItemSlide() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {
                Products.map(product => (
                    <div>
                        <img src={product.imgUrl} style={{ width: "60px", height: "60px" }} />
                        <h5 style={{ marginTop: '5px', textAlign: 'center' }}>{product.title}</h5>
                    </div>
                ))
            }
        </div>
    )
}
