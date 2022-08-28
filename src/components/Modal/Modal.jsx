import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import {FormControl} from "@mui/material";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({name, modalOpen,nameObject}) => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(modalOpen);
    const [value,setValue]=useState()
    const handleClose = () => setOpen(false);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const newLine = {
            name:value
        }
        nameObject.push(newLine)
        setOpen(false)

    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Добавить {name}
                    </Typography>
                  <FormControl onSubmit={handleSubmit}>
                      <TextField variant='outlined' value={value} onChange={e=>setValue(e.target.value)} fullWidth label="Пример Работа" id="fullWidth"/>
                      <Box sx={{mt: 2}}>
                          <Button onClick={handleSubmit} variant="contained" color='primary'>
                              Сохранить
                          </Button>
                      </Box>
                  </FormControl>
                </Box>
            </Modal>
        </div>
    );
}
export  default  BasicModal
