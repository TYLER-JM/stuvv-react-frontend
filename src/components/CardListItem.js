import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CardListItemCarousel from './CardListItemCarousel';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ListingModal from './ListingModal';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardListItem(props) {
  // props.listingId

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePageChange = () => {
    window.location.pathname = "/build" 
  };


  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={`$ ${props.price} per day`}
      />
      {/* <CardListItemCarousel /> */}
      <CardListItemCarousel 
        urls={props.urls}
      />
      <ListingModal show={modalShow} onHide={() => setModalShow(false)} listingId={props.listingId}/>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share"> 
          {window.location.pathname === "/" ? <PostAddIcon onClick={() => setModalShow(true)}/> : <EditIcon onClick={handlePageChange}/>}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}