import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar'

const Posts = () => {

    const slug = useParams();
    console.log(slug)

    const state = useSelector(state => { if (state) return state })
    console.log(state)
    let post = {};
    if (state) {
        post = state.posts.find(item => item.id === parseInt(slug.id));
    }
    console.log(post)
    return (
        <>
            <Navbar />
           
        </>
    )
}

export default Posts;