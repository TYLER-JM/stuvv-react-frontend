import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles(theme => ({
  card: {
    width: 300
  },
  div: {
    height: "300px",
    width: "300px",
    margin: "auto",
    backgroundColor: "#",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "font-size": "7rem",
    color: "#FFD79E",

    "&:hover": {
      cursor: "pointer"
    }
  },
  avatar: {
    backgroundColor: "#E5A74F",
    "font-size": "0.8rem"
  },
}));

export default function CardBlank(props) {

  const classes = useStyles();
  const handlePageChange = () => {
    window.location.pathname = "/build"
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            New
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Add a new Product"
        subheader="Price per day"
      />
      <div className={classes.div}>
        <i class="fas fa-plus-circle"
          onClick={handlePageChange}
          className={classes.img}
        >
        </i>
      </div>
    </Card>
  );
}