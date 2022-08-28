import Container from "@mui/material/Container";
import {taskData} from "../data";
import ListElement from "../components/List/List";


const Main = () => {

    return (
        <Container>
            {taskData.filter(el => el.deleted === false)
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

export default Main