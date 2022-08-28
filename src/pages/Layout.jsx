import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));
const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <Grid container  style={{marginTop:'20px'}} >
                <Grid item xs={3}>
                    <SideBar/>
                </Grid>
                <Grid item xs={9}  >
                    <Outlet  />
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout