import React, { Fragment } from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import CardListItemCarousel from './CardListItemCarousel';
import EditIcon from '@material-ui/icons/Edit';
import ListingModal from './Request/ListingModal';
import { Link } from "react-router-dom";
import axios from "axios"
import "./CardListItem.scss"


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
    // console.log("inside CLI props.userID: ", props.user.id)
  };

  const handlePageChange = () => {
    // window.location.pathname = "/build"
    props.setBuildState({
      description: props.description,
      price: props.price,
      title: props.title,
      id: props.listingid,
    })
    // console.log("from cardListItem", props.price, props.listingid)
  };

  const handleDeleteListing = () => {
    axios.delete(`http://localhost:3000/listings/${props.listingid}`, { withCredentials: true })
      .then((resp) => {
        console.log("After delete action: ", resp.data)
        if (window.location.pathname === "/my_stuvv") {
          axios.get(`http://localhost:3000/userslistings/${props.user.id}`, { withCredentials: true })
            .then((resp) => {
              props.setList(resp.data)
              // return window.location = window.location.href
            })
        }
        if (window.location.pathname === "/") {
          axios.get("http://localhost:3000/listings", { withCredentials: true })
            .then((resp) => {
              props.setList(resp.data)
              // return window.location = window.location.href
            })
        }
      })

  };

  const buttons = () => {
    if (props.user.id === props.owner.id) {
      return (
        <Fragment>
          <Link to="/build">
            <IconButton
              aria-label="share"
              onClick={handlePageChange}>
              <EditIcon />
            </IconButton  >
          </Link>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              if (window.confirm('Are you sure you wish to delete this item?'))
                handleDeleteListing()
            }
            }
          >
            <DeleteIcon />
          </IconButton>
        </Fragment>)
    } else if (window.location.pathname === "/") {
      return (<IconButton
        aria-label="share"
        onClick={() => {
          if (props.user.id) {
            setModalShow(true)
          }
          // } else {
          //   return (<Register show="true" onHide={() => window.location.pathname = "/"} />)
          // }
        }
        }>
        <PostAddIcon />
      </IconButton>)
    } else {
      return null
    }
  }


  return (
    <div className="card-list-item">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.owner.id}
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
        <CardListItemCarousel
          urls={props.urls}
        />
        <ListingModal show={modalShow} onHide={() => setModalShow(false)} title={props.title} user={props.user} listingowner={props.owner.id} />
        <CardActions disableSpacing>
          {buttons()}
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
            <Typography paragraph>Owned By:</Typography>
            <Typography paragraph>
              {props.owner.first_name}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}