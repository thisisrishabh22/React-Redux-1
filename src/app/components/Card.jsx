import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            height: "100%",
        },
        minHeight: 220,
        margin: 10
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

export default function CardPost({ post }) {
    const classes = useStyles();
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
    );
}
