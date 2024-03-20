import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    title: {
        padding: theme.spacing(3, 2.5, 2),
        color: theme.palette.openTitle,
    },
    media: {
        width: 400,
        height: 400
    },
}));
export default function Home() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>Welcome to WNTNCC Dentistry</Typography>
            <CardMedia className={classes.media} image={'./logo.webp'}/>
            {/* <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the MERN Skeleton home page.
                </Typography>
            </CardContent> */}
        </Card>
    )
}

