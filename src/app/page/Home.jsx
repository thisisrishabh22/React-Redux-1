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
            <Card />
        </>
    )
}

export default Home
