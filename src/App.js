import {Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Form from "./components/Form/Form";
import Main from "./pages/Main";
import Completed from "./pages/Completed";
import Deleted from "./pages/Deleted";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='addTask' element={<Form />} />
                    <Route path='completed' element={<Completed />} />
                    <Route path='deleted' element={<Deleted />} />

                </Route>
            </Routes>
        </>
    );
}

export default App;
