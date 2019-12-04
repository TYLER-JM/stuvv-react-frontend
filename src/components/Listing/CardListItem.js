import React, { Fragment, useState } from 'react';
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
import ListingModal from '../Request/ListingModal';
import { Link } from "react-router-dom";
import axios from "axios"
import "./CardListItem.scss"
import DeleteButtonModal from './DeleteButtonModal'
import Register from '../Login/RegisterModal';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [register, setRegister] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePageChange = () => {
    props.setBuildState({
      description: props.description,
      price: props.price,
      title: props.title,
      id: props.listingid,
      availability: props.availability
    })
  };

  const handleDeleteListing = () => {
    axios.delete(`${process.env.REACT_APP_DB_HOST}/listings/${props.listingid}`, { withCredentials: true })
      .then((resp) => {
        console.log("After delete action: ", resp.data)
        if (window.location.pathname === "/my_stuvv") {
          axios.get(`${process.env.REACT_APP_DB_HOST}/userslistings/${props.user.id}`, { withCredentials: true })
            .then((resp) => {
              props.setList(resp.data)
            })
        }
        if (window.location.pathname === "/") {
          axios.get(`${process.env.REACT_APP_DB_HOST}/listings`, { withCredentials: true })
            .then((resp) => {
              props.setList(resp.data)
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
          <DeleteButtonModal
            handleDeleteListing={handleDeleteListing}
          >
            <DeleteIcon />
          </DeleteButtonModal>

        </Fragment>)
    } else if (window.location.pathname === "/") {
      return (<IconButton
        aria-label="share"
        onClick={() => {
          if (props.user.id) {
            setModalShow(true)
          }
          if (!props.user.id) {
            setRegister(true)
          }
        }
        }>
        <PostAddIcon />
        <Register show={register} onHide={() => window.location.pathname = "/"} />
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
              {props.owner.first_name[0]}{props.owner.last_name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader={`$${props.price} per day`}
        />
        <CardListItemCarousel
          urls={props.urls}
          description={props.description}
        />
        <ListingModal show={modalShow} onHide={() => setModalShow(false)} listingid={props.listingid} title={props.title} user={props.user} listingowner={props.owner.id} />
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
            <Typography paragraph><strong>Description:</strong></Typography>
            <Typography paragraph>
              <div className="info">{props.description}</div>
            </Typography>
            <Typography paragraph><strong>Owned by:</strong></Typography>
            <Typography paragraph>
              <div className="info">{props.owner.first_name}</div>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}