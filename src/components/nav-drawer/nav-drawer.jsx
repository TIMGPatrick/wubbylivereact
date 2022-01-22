import logo from "../../logo.svg";
import {Drawer} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { closeDrawer } from '../../store/drawerSlice/drawerSlice'


function NavDrawer() {

    const drawerState = useSelector((state) => state.drawer.value)
    const dispatch = useDispatch()

    return (
        <div id="nav-drawer">
            <Drawer anchor="left" open={drawerState} variant={"temporary"} ModalProps={{onBackdropClick: (event) => dispatch(closeDrawer(event))}}>
                <h1><a href="#">Episode 1</a></h1>
                <h1><a href="#">Episode 2</a></h1>
                <h1><a href="#">Episode 3</a></h1>
                <h1><a href="#">Episode 4</a></h1>
            </Drawer>
        </div>
    )
}

export default NavDrawer
