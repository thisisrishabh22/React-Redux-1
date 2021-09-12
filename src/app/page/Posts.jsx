import React, { useContext } from 'react';
import { useSelector, ReactReduxContext } from 'react-redux';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid } from '@material-ui/core';
import { deletePost } from '../utils/ActionConstructor';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        justifyContent: "center",
        width: "min"
    },
    root: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            height: "100%",
        },
        minHeight: 220,
        margin: 10,
        maxWidth: 600
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        [theme.breakpoints.down('sm')]: {
            height: "100%",
            minHeight: 120
        },
        width: "100%",
    },
}));

const Posts = () => {

    const { store } = useContext(ReactReduxContext);
    console.log(store)
    const classes = useStyles();
    const slug = useParams();

    const state = useSelector(state => { if (state) return state })
    console.log(state)
    let post = state.posts.find(item => item.id === parseInt(slug.id));
    console.log(post);

    const postRender = () => {
        if (post) {
            return (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image={"https://picsum.photos/id/" + post.id + "/600"}
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" F>
                                {post.body}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            )
        }
        else {
            return (
                <Box style={{ padding: 20 }}>
                    <Typography variant="subtitle1" color="textSecondary" component="h4" >
                        Post Was Deleted
                </Typography>
                </Box>
            )
        }
    }
    return (
        <>
            <Navbar />
            <Box className={classes.main}> <Grid container style={{ width: "fit-content" }}>
                <Grid item sm={12}>
                    {postRender()}
                </Grid>
            </Grid></Box>
            <Box style={{ padding: 30, display: "flex", justifyContent: "center" }}>
                {
                    post ? <Button disableElevation variant="contained" color="secondary" onClick={() => store.dispatch(deletePost(parseInt(slug.id)))}>Delete Post</Button> :
                       <Link to="/"> <Button disableElevation variant="contained" color="primary">Go to Home Page</Button></Link>
                }
            </Box>
        </>
    )
}

export default Posts;