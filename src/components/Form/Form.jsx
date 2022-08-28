import * as React from 'react';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDateTimePicker} from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';
import {Button, Checkbox, TextareaAutosize, TextField} from "@material-ui/core";
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import {Label, ListTask, taskData} from "../../data";
import {Navigate, useNavigate} from "react-router-dom";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];



const Form = () => {
    const navigate = useNavigate()
    const [personName, setPersonName] = useState([]);
    const [labelAdd, setLabel] = useState('');
    const [listTask, setListTack] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(new Date());
    const [check, setCheck] = useState(false)
    const [nameTask, setNameTask] = useState('')
    const [description,setDescription]=useState('')
    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeLabel = (event) => {
        const {
            target: {value},
        } = event;
        setLabel(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleListTask = (event) => {
        setListTack(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleChangeCompleted = (e) => {
        setCheck(e.target.checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            id: 3,
            name: nameTask,
            date:value,
            performed:check,
            description:description,
            label:labelAdd,
            performers:personName,
            deleted: false,
        }
        taskData.push(newTask)
        navigate('/')
    }
    return (
        <Box
            sx={{
                width: 700,
                maxWidth: '100%',
            }}
        >
            <FormControl onSubmit={handleSubmit}>
                <Box>
                    <Checkbox onChange={handleChangeCompleted} color='primary'/>
                    <label>Выполнено</label>
                </Box>
                <TextField variant='outlined' value={nameTask} fullWidth label="Название задачи" id="fullWidth"
                           onChange={e => setNameTask(e.target.value)}/>
                <div style={{marginTop: '20px'}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <div>
                                <MobileDateTimePicker
                                    label="Дата и Время"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) =>
                                        <TextField {...params} variant='outlined'/>}
                                />
                                <Select
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={listTask}
                                    onChange={handleListTask}
                                    style={{width: '50%', marginLeft: '10px'}}
                                    input={<OutlinedInput/>}
                                    MenuProps={MenuProps}
                                    inputProps={{'aria-label': 'Without label'}}
                                >
                                    {ListTask.map((el) => (
                                        <MenuItem
                                            key={el.name}
                                            value={el.name}
                                        >
                                            {el.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <TextareaAutosize
                                minRows={3}
                                placeholder="Описание задачи"
                                style={{maxWidth: 700, width: 700}}
                                value={description}
                                onChange={e=>setDescription(e.target.value)}

                            />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Select
                                    multiple
                                    displayEmpty
                                    sx={{width: '50%', mr: 2}}
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput/>}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Исполнители</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{'aria-label': 'Without label'}}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <Select
                                    sx={{width: '50%'}}
                                    value={labelAdd}
                                    onChange={handleChangeLabel}
                                    input={<OutlinedInput/>}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Метки</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{'aria-label': 'Without label'}}
                                >
                                    {Label.map((el) => (
                                        <MenuItem
                                            key={el.name}
                                            value={el.name}
                                        >
                                            {el.name}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </div>
                            <Box sx={{mt: 2}}>
                                <Button onClick={handleSubmit} variant="contained" color='primary'>
                                    Сохранить
                                </Button>
                            </Box>
                        </Stack>
                    </LocalizationProvider>
                </div>
            </FormControl>
        </Box>
    )
}

export default Form