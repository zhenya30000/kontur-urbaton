import { useState } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.lighterPrimary[100] }}
      onClick={() => { setSelected(title) }}
      icon={icon}>
      <Typography>
        {title}
      </Typography>
      <Link to={to} />
    </MenuItem>
  )

}
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return <Box
    display='flex'
    sx={{
      '& .pro-sidebar-inner': {
        background: `${colors.primary[400]} !important`,
      },
      '& .pro-icon-wrapper': {
        backgroundColor: 'transparent !important'
      },
      '& .pro-inner-item': {
        padding: '5px 35px 5px 20px !important'
      },
      '& .pro-inner-item:hover': {
        color: '#94a66d !important'
      },
      '& .pro-menu-item.active': {
        color: '#94a66d !important',
      },
      '& .ps-menu-button': {
        color: `${colors.accent1[400]} !important`
      },
      '& .ps-menu-button:hover': {
        backgroundColor: 'transparent !important'
      },
    }}>
    <ProSidebar collapsed={isCollapsed} sx={{}}>
      <Menu iconShape="circle" >
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.accent2[500],
            
          }}
        >
          {!isCollapsed && (
            <Box
              display='flex'
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <img
                alt='User Profile'
                width='60px'
                src={ theme.palette.mode === 'dark' ? '../../assets/logo_w.png' : '../../assets/logo_b.png' }
                style={{ cursor: 'pointer' }}
              />
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        
        <Box paddingLeft={isCollapsed ? undefined : '3%'}>
          <Item
            title='Главная'
            to='/'
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
  
          <Item
            title='История загрузок'
            to='/history'
            icon={<ManageSearchIcon />}
            selected={selected}
            setSelected={setSelected}
          />
       
       {/*    <Item
            title='Помощь'
            to='/help'
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
    
        </Box>
      </Menu>
    </ProSidebar>
  </Box>
}

export default Sidebar;
