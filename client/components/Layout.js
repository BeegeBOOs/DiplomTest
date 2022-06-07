import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Menu from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';
import Link from '@mui/material/Link';
import NavigationMenu from './NavigationMenu';
import AvatarComp from './Avatar';
import { styled } from '@stitches/react';

const Layout = ({ children }) => {
  //popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const Header = styled('div', {
    position: 'fixed',
    width: '100vw',
    height: '5rem',
    background: '#FEFEFE',
    paddingRight: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  return (
    <>
      <CssBaseline />
      {/* 11ffee00 */}
      <Header style={{zIndex:9999999}}>
        {/* <EdgeTrigger style={{}} target={{ anchor: 'left', field: 'open' }}>
            {(open, setOpen) => (
              <IconButton onClick={() => setOpen(!open)} edge='end'>
                {open ? <KeyboardArrowLeft /> : <Menu />}
              </IconButton>
            )}
          </EdgeTrigger> */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0 10px',
          }}>
          <Link
            variant='h2'
            underline='none'
            color='inherit'
            href='/'
            sx={{ fontSize: 24 }}>
            {'SelfEmploy'}
          </Link>
        </motion.div>
        <NavigationMenu/>
        <AvatarComp />
      </Header>
      {/* <EdgeSidebar anchor='left'>
        <SidebarContent>
          <NavSidebarMockup />
        </SidebarContent>
        <EdgeTrigger target={{ anchor: 'left', field: 'collapsed' }}>
          {(collapsed, setCollapsed) => (
            <ButtonBase
              onClick={() => setCollapsed(!collapsed)}
              sx={{ flexGrow: 1, height: 48 }}>
              {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </ButtonBase>
          )}
        </EdgeTrigger>
      </EdgeSidebar> */}
      {/* <Content>
        <Container maxWidth='md' sx={{ py: 5 }}>
          <ContentMockup />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}></Grid>
        </Container>
      </Content>
      <Footer>
        <FooterMockup />
      </Footer> */}
      <div
        style={{
          paddingTop: '6rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1160px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
