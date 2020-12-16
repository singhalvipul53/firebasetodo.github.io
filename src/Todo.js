import React, { useState } from 'react'
import './App.css'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {db,auth} from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Todo = (props) => {
    const classes=useStyles();
    const [Input, setInput] = useState()
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {

        db.collection('todos').doc(props.todo.id).set(
            {
                todo: Input,
            }, { merge: true }
        )
        setOpen(false)

    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
            <>
            <div className={classes.paper}>
                <h1>Hi,I am a Model</h1>
                <input placeholder='Type..' value={Input} onChange={e => setInput(e.target.value)} />
                <button onClick={updateTodo} >Update</button>
            </div>
            </>
            </Modal>
            <div className='outside'>
                <li>
                    {props.todo.todo}
                </li>
                <div className='inside'>
                    <span>
                        <button type="button" onClick={handleOpen}>
                            Edit
                          </button>

                    </span>
                    <span><button onClick={e => {
                        db.collection('todos').doc(props.todo.id).delete()
                    }}>Delete</button></span>
                </div>
            </div>
        </>
    )
}

export default Todo
