import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from 'react-redux'
import { openDrawer } from '../../store/drawerSlice/drawerSlice'

function Header() {

    const drawerState = useSelector((state) => state.drawer.value)
    const dispatch = useDispatch()

    return (
    <div id="header">
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon onClick={(event) => dispatch(openDrawer(event)) }/>
                </IconButton>
                <Typography variant="h6" component="div" align={"left"} sx={{flexGrow: 1}}>
                    <h1>Wubby Live!</h1>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)
}

export default Header
