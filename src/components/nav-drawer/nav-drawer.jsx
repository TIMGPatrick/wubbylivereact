import logo from "../../logo.svg";
import {Drawer, Button} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { closeDrawer } from '../../store/drawerSlice/drawerSlice'
import VideoArea from "../main-layout/videoarea/video-area";
import {getEpisode1,getEpisode2,getEpisode3, getEpisode4} from "../../store/episodeSlice/episodeSlice";


function NavDrawer() {

    const drawerState = useSelector((state) => state.drawer.value)
    const dispatch = useDispatch()

    const episodeState = useSelector((state) => state.episode.episode)

    function episodeSelect(event,epNumber) {
        console.log("Episode 1 button clicked")
        if (epNumber === 1) {
            dispatch(getEpisode1(event))
        }
        else if (epNumber === 2) {
            dispatch(getEpisode2(event))
        }
        else if (epNumber === 3) {
            dispatch(getEpisode3(event))
        }
        if (epNumber === 4) {
            dispatch(getEpisode4(event))
        }
    }

    return (
        <div id="nav-drawer">
            <Drawer anchor="left" open={drawerState} variant={"temporary"} ModalProps={{onBackdropClick: (event) => dispatch(closeDrawer())}}>
                <Button onClick={(event) => episodeSelect(event,1)}><a href="#">Episode 1</a></Button>
                <Button onClick={(event) => episodeSelect(event,2)}><a href="#">Episode 2</a></Button>
                <Button onClick={(event) => episodeSelect(event,3)}><a href="#">Episode 3 </a></Button>
                <Button onClick={(event) => episodeSelect(event,4)}><a href="#">Episode 4</a></Button>
            </Drawer>
        </div>
    )
}

export default NavDrawer
