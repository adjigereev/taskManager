import {Container} from "@mui/material";
import {taskData} from "../data";
import ListElement from "../components/List/List";


const Deleted = () => {
    return (
        <Container>
            {taskData.filter(el => el.deleted === true)
                .map(el => <ListElement
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    date={el.date}
                    label={el.label}
                    performed={el.performed}
                    listTask={el.listTask}
                    performers={el.performers}
                />)}
        </Container>
    )
}

export default Deleted