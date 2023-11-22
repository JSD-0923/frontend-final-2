import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import {StyledTitle} from "../themes/StyledPageTitle";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import {useLogout} from "../hooks/useAppAPIs";
import {Outlet, useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";


const tabLabels = [
    "Personal Information",
    "Refer and Earn",
    "My Orders",
    "My Wishlist",
    "My Reviews",
    "My Address Book",
    "My Saved Cards",
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <section>{children}</section>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const UserProfileLayout = () => {
    const [value, setValue] = React.useState(0);

    const navigate = useNavigate();
    const userMutation = useLogout();
    const handleChange = (event, newValue) => {
        setValue(newValue);

        const paths = ["/user-profile/info", "/user-profile/sign"];
        navigate(paths[newValue]);
    };

    const handleLogout = async () => {
        try {
            await userMutation.mutateAsync();

            localStorage.removeItem('token');
            navigate('/');

        } catch (error) {
            throw error;
        }
    };

    return (
     <div style={{width:'90%', margin: '1rem'}}>
         <CustomBreadcrumbs links={[{name: 'Home', path: `/`}]} label={'Checkout'}/>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
             <StyledTitle variant="h2" component={'h1'}>
                 {tabLabels[value]}
             </StyledTitle>
             <Button onClick={handleLogout} endIcon={<LogoutIcon />} variant={'outlined'}>
                 Logout
             </Button>
         </div>

         <Box
             sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:'auto', width: '100%'}}
         >
             <Grid container>
               <Grid item xs={3}>
                   <Tabs
                       orientation="vertical"
                       variant="scrollable"
                       value={value}
                       onChange={handleChange}
                       aria-label="user profile"
                       sx={{
                           borderRadius: '12px',
                           maxWidth: '270px',
                           borderColor: 'divider',
                           backgroundColor: '#F1F1F1 !important',
                           '.MuiTabs-indicator': {
                               left: 1,
                           },
                           '& .Mui-selected': {
                               backgroundColor: '#F1F1F1 !important',
                               color: '#1B4B66 !important',
                               padding: 0
                           },
                       }}
                   >
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>Personal Information <NavigateNextIcon /></div>}{...a11yProps(0)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>Refer and Earn <NavigateNextIcon /></div>} {...a11yProps(1)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Orders <NavigateNextIcon /></div>} {...a11yProps(2)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Wishlist <NavigateNextIcon /></div>} {...a11yProps(3)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Reviews <NavigateNextIcon /></div>} {...a11yProps(4)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Address Book <NavigateNextIcon /></div>} {...a11yProps(5)} />
                       <Tab label={<div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>My Saved Cards <NavigateNextIcon /></div>} {...a11yProps(6)} />
                   </Tabs>
               </Grid>
                 <Grid item xs={9}>
                     <TabPanel value={value} index={0}>
                         <Outlet/>
                     </TabPanel>
                 </Grid>
             </Grid>

         </Box>
     </div>
    );
}

export default UserProfileLayout;
