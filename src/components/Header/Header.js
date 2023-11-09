import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { SearchBox } from '../SearchBox/SearchBox';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


const pages = ['Handbags', 'Watches', 'Skincare', 'Jewellery', 'Apparels'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            CORA'L
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton

              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="cc"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography variant={'h4'} component={'h2'} sx={{ color: 'TypeHighEmphasis' }} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 10,
              fontFamily: 'monospace',
              fontWeight: 400,
              color: '#17494D',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: "TypeHighEmphasis.main" }}
              >
                <Typography variant={'h4'} component={'span'}>{page}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ backgroundColor: 'accent.main', flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: '362px', height: '44px', mr: '15px' }}>
            <SearchBox />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, }}>


            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: '5px', color: 'primary.main', }}>
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: '5px', color: 'primary.main', }}>
              <PersonOutlineIcon />
            </IconButton>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'primary.main', }}>
              <WorkOutlineIcon />
            </IconButton>


          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: '20px', color: 'primary.main', }}>
              <AddBoxOutlinedIcon />
            </IconButton>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: '20px', color: 'primary.main', }}>
              <SearchIcon />
            </IconButton>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: '20px', color: 'primary.main', }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header