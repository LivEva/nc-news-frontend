import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo */}
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
                    
                {/* Navigation Buttons */}
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
