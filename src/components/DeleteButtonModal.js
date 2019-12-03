import React, { useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import './DeleteButtonModal.scss'




export default function DeleteButtonModal(props) {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button variant="link" onClick={() => setSmShow(true)}><DeleteIcon /></Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}>
        <div className='body'>
          <div className="title">Permanently delete listing?</div>
          <div className="buttons">
            <div className="button" 
              onClick={() => {
                  console.log("button clicked")
                  props.handleDeleteListing()
                  setSmShow(false)
              }
              }
            >yes</div>
            <div className="button" onClick={() => setSmShow(false)}>no</div>
          </div>
        </div>
      </Modal>
    </>
  );
}