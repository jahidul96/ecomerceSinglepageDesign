import React from 'react'
import { Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const useStyels = makeStyles({
    navContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexBasis: '80%',
        alignItems: 'center',
        justifyContent: "space-around",
        backgroundColor: 'dodgerblue',
        height: 60
    },
    logoArea: {
        display: 'flex',
        alignItems: 'center',

    },
    logoText: {
        marginRight: "10px",
        color: '#fff'
    },
    inputDiv: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "550px",
        height: 36,
        borderRadius: 2
    },
    input: {
        width: '100%',
        backgroundColor: 'transparent',
        border: "none",
        padding: '8px 10px',
        outline: 'none',
        fontSize: 16
    },

    rightContainer: {
        display: "flex",
        flexBasis: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff'
    },



})

export default function Nav() {
    const classes = useStyels()
    return (
        <div className={classes.navContainer}>
            <div className={classes.logoArea}>
                <h3 className={classes.logoText}>SellAndBuy.</h3>
                <div className={classes.inputDiv}>
                    <input placeholder='search...' className={classes.input} />
                    <SearchIcon style={{ color: 'dodgerblue', marginRight: '8px' }} />
                </div>
            </div>
            <div className={classes.rightContainer}>
                <Button variant="contained" style={{ background: '#fff', color: '#000', padding: "6px 20px" }}>Login</Button>
                <Typography style={{ fontWeight: 600 }} >More</Typography>
                <ShoppingCartIcon />
            </div>
        </div>
    )
}
