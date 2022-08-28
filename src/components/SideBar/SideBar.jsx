import {Box, Container, Divider, ListItemButton} from "@mui/material";
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/Inbox';
import {Link} from "react-router-dom";
import {Label, ListTask} from '../../data'
import {Button, ListItem, ListItemIcon} from "@material-ui/core";
import BasicModal from "../Modal/Modal";
import {useState} from "react";

import DeleteIcon from '@mui/icons-material/Delete';

const SideBar = () => {
    const [isModal, setIsModal] = useState()
    const [array, setArray] = useState(Label)
    const [listArray, setListArray] = useState(ListTask)
    const [title, setTitle] = useState('')
    const [nameObject, setNameObject] = useState()
    const addListener = ({title1, name}) => {
        setIsModal(!isModal)
        setTitle(title1)
        setNameObject(name);

    }
    const handleDeleted = (id) => {
        setArray(el => array.filter(el => el.id !== id))
    }
    const handleDeletedListTask = (id) => {
        setListArray(el => listArray.filter(el => el.id !== id))
    }


    return (
        <>
            <Container maxWidth='xl'>

                <Paper sx={{width: 320, maxWidth: '100%'}}>
                    <List>
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <Button variant="contained" color='primary'>
                                <Link style={{color: 'white', textDecoration: 'none'}} to="/addTask">Добавить
                                    задачу</Link>
                            </Button>
                        </Box>
                        <Link to='/'>
                            <ListItemButton sx={{mt: 1}}>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Мои задачи"/>
                            </ListItemButton>
                        </Link>
                        <Link to='/completed'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Выполнено"/>
                            </ListItemButton>
                        </Link>
                        <Link to='deleted'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Удалено"/>
                            </ListItemButton>
                        </Link>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={() => addListener({title1: 'Метка', name: Label})}>

                                <ListItemText primary="Метки"/>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        {array.map(el => {
                            return (
                                <ListItem>
                                    <ListItemButton>
                                        {el.name}
                                        <ListItemIcon>
                                            <DeleteIcon onClick={e => handleDeleted(el.id)}/>
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={() => addListener({title1: 'Список задач', name: ListTask})}>
                                <ListItemText primary="Списики задач"/>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        {listArray.map(el => {
                            return (
                                <ListItem>
                                    <ListItemButton>
                                        {el.name}
                                        <ListItemIcon>
                                            <DeleteIcon onClick={e => handleDeletedListTask(el.id)}/>
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
                {isModal &&
                <BasicModal name={title} nameObject={nameObject} modalOpen={isModal}/>
                }
            </Container>
        </>

    )
}

export default SideBar