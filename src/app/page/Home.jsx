import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Navbar from '../components/Navbar'

const Home = () => {
    const state = useSelector(state => { if (state) return (state) });
    console.log(state)
    return (
        <>
            <Navbar />
            <Grid container>
                {state && state.posts.map((post) => (
                    <Grid item md={6} sm={12} ><Box style={{margin:10}}><Card  post={post} /></Box></Grid>
                ))}
            </Grid>
        </>
    )
}

export default Home
