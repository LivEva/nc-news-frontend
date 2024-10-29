import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (

        <AppBar className='nav-bar-colour' position="static" sx={{ backgroundColor: '#000' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            
                <Box>
                    <Button
                    component={RouterLink}
                    to={('/articles')}
                    color="inherit"
                    sx={{ mx: 1 }}
                    id="logo"
                    >

                        THATS THE TEA

                    </Button>
                </Box>


                <Box>
                    <Button
                        className="nav-button"
                        component={RouterLink}
                        to="/articles"
                        color="inherit"
                        sx={{ mx: 1 }}
                    >

                        Home

                    </Button>


                    <Button
                        className="nav-button"
                        component={RouterLink}
                        to="/topics"
                        color="inherit"
                        sx={{ mx: 1 }}
                    >
                        Tea Selection
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
