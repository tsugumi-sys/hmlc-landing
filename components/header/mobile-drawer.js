import React, { useContext } from 'react'
import { Box } from 'theme-ui'
import { Scrollbars } from 'react-custom-scrollbars'
import Drawer from 'components/drawer'
import { DrawerContext } from '../../contexts/drawer/drawer.context'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-scroll'
import {
    FaTwitter,
    FaGithubAlt,
} from 'react-icons/fa'
import {
    DiCodeigniter
} from 'react-icons/di'
import menuItems from './header.data'

const socials = [
    {
        path: 'https://twitter.com/hulclow',
        icon: <FaTwitter />,
    },
    {
        path: 'https://github.com/tsugumi-sys/hmlc-landing',
        icon: <FaGithubAlt />,
    },
    {
        path: 'https://hulc.vercel.app/',
        icon: <DiCodeigniter />
    }
];

const MobileDrawer = () => {
    const { state, dispatch } = useContext(DrawerContext);

    // Toggle drawer
    const toggleHander = React.useCallback(() => {
        dispatch({
            type: 'TOGGLE',
        });
    }, [dispatch])

    return (
        <Drawer
          width="320px"
          drawerHandler={
              <Box sx={styles.handler}>
                  <IoMdMenu size='26px' />
              </Box>
          }
          open={state.isOpen}
          toggleHander={toggleHander}
          closeButton={<IoMdClose size="24px" color="#000000" />}
          drawerStyle={styles.drawer}
          closeBtnStyle={styles.close}
        >
            <Scrollbars autoHide>
                <Box sx={styles.content}>
                    <Box sx={styles.menu}>
                        {menuItems.map(({ path, label }, i) => (
                            <Link
                              activeClass="active"
                              to={path}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              key={i}
                              onClick={toggleHander}
                            >
                                {label}
                            </Link>
                        ))}
                    </Box>

                    <Box sx={styles.menuFooter}>
                        <Box sx={styles.social}>
                            {socials.map(({ path, icon }, i) => (
                                <Box as="span" key={i} sx={styles.social.icon}>
                                    <a href={path} target="_blank" rel="noreferrer">
                                        {icon}
                                    </a>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Scrollbars>
        </Drawer>
    );
};

const styles = {
    handler: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        width: '26px',
        cursor: 'pointer',
        '@media screen and (min-width: 1024px)': {
          display: 'none',
        },
      },
    
      drawer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'dark',
      },
    
      close: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '25px',
        right: '30px',
        zIndex: '1',
        cursor: 'pointer',
      },
    
      content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        pt: '100px',
        pb: '40px',
        px: '30px',
      },
    
      menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        a: {
          fontSize: '16px',
          fontWeight: '500',
          color: 'heading_third',
          py: '15px',
          cursor: 'pointer',
          borderBottom: '1px solid #e8e5e5',
          transition: 'all 0.25s',
          '&:hover': {
            color: 'primary',
          },
          '&.active': {
            color: 'primary',
          },
        },
      },
    
      menuFooter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 'auto',
      },
    
      social: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
        icon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'heading_third',
          fontSize: 1,
          mr: 4,
          transition: 'all 0.25s',
          cursor: 'pointer',
          svg: {
            fill: 'text',
            transition: 'all 0.25s',
          },
          ':last-child': {
            mr: '0',
          },
          '&:hover svg': {
            fill: 'primary',
          },
        },
      },

      button: {
        color: 'white',
        fontSize: '14px',
        fw: '700',
        height: '45px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: '0',
      },
};

export default MobileDrawer;