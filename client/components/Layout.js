import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import {
  Root,
  Header,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getCozyScheme,
} from '@mui-treasury/layout';

import {
  HeaderMockup,
  ContentMockup,
  FooterMockup,
  NavSidebarMockup,
} from '@mui-treasury/mockup/layout';

import Menu from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const scheme = getCozyScheme();

const Layout = () => {
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

  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header style={{  }}>
        <div
          style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 10px',
          }}>
          <EdgeTrigger style={{}} target={{ anchor: 'left', field: 'open' }}>
            {(open, setOpen) => (
              <IconButton onClick={() => setOpen(!open)} edge='end'>
                {open ? <KeyboardArrowLeft /> : <Menu />}
              </IconButton>
            )}
          </EdgeTrigger>
          <h2 style={{}}>SelfEmploy</h2>
          <div>
            <Tooltip title='Користувач'>
              <IconButton onClick={handleClick}>
                <AccountCircleIcon fontSize='large' />
              </IconButton>
            </Tooltip>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'left',
                  padding: '0px 10px',
                }}>
                <Typography variant='h5'>User name</Typography>
                <Typography variant='h6'>User email</Typography>
                <Divider variant='middle' />
                <Button>
                  <Typography variant='button'>Log out</Typography>
                </Button>
                <Button variant='outlined' >
                  <Typography variant='button'>Log in</Typography>
                </Button>
              </div>
            </Popover>
          </div>
        </div>
      </Header>
      <EdgeSidebar anchor='left'>
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
      </EdgeSidebar>
      <Content>
        <Container maxWidth='md' sx={{ py: 5 }}>
          <ContentMockup />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}></Grid>
        </Container>
      </Content>
      <Footer>
        <FooterMockup />
      </Footer>
    </Root>
  );
};

export default Layout;
