import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CardListItemCarousel from './CardListItemCarousel';
import EditIcon from '@material-ui/icons/Edit';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ListingModal from './Request/ListingModal';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
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
    backgroundColor: "#215584",
  },
}));

export default function CardListItem(props) {
  // props.listingid

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log("inside CLI props.userID: ", props.user.id)
  };

  const handlePageChange = () => {
    window.location.pathname = "/build"
  };


  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.owner}
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
      <ListingModal show={modalShow} onHide={() => setModalShow(false)} listingid={props.listingid} user={props.user} listingowner={props.owner} />
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">  */}
        {window.location.pathname === "/" ?
          <IconButton
            aria-label="share"
            onClick={() => setModalShow(true)}>
            <PostAddIcon />
          </IconButton> :
          <IconButton
            aria-label="share"
            onClick={handlePageChange}>
            <EditIcon />
          </IconButton  >}
        {/* </IconButton> */}
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