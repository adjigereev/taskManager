import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Checkbox} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import List from "@mui/material/List";
import {taskData} from "../../data";

const useStyles = makeStyles(() => ({
    backgroundOverdue: {
        backgroundColor: 'red',
        color: 'white',
        padding: "4px",
        borderRadius: '10px',
        display: 'flex',
    },
    backgroundLabel: {
        backgroundColor: '#1976d2',
        color: 'white',
        padding: "4px",
        borderRadius: '10px',
        display: 'flex',
    }
}));

function stringAvatar(name) {
    return {
        children: `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`,
    };
}

const ListElement = ({id, name, date, label, performed, listTask, performers}) => {
    const classes = useStyles()
    const [examination, setExamination] = useState(false)

    const handleChange = (id) => {
        const data = taskData.find(el => el.id === id)
        data.performed = !performed
    }

    return (
        <List>
            <ListItem button>
                <Checkbox color='primary' onChange={e => handleChange(id)} defaultChecked={performed}/>
                <ListItemText primary={name}/>
                <p className={classes.backgroundLabel} style={{marginRight: '5px'}}>{label}</p>
                {examination &&
                <>
                    <p className={classes.backgroundOverdue}>Просроченно</p>
                    <p style={{fontSize: '12px', color: 'red', marginLeft: '5px'}}>date</p>
                </>
                }
                {performers.map(el => <Avatar {...stringAvatar(el)} sx={{mr: 1, ml: 1}}/>)}
            </ListItem>
        </List>
    )
}


export default ListElement
