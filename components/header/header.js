/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button, useColorMode } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import { HmlcLogo } from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  const [colorMode, setColorMode] = useColorMode('dark');
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <HmlcLogo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>
          <Button
              variant="colorModeButton"
              onClick={e => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default')
              }}>
               {colorMode === 'default' ? '🌔' : '🌟'}
          </Button>
          <a target="_blank" rel="noopener" href="https://twitter.com/@hmlc_tweet" style={{ textDecoration: 'none' }}>
            <Button
              className="donate__btn"
              variant="secondary"
              aria-label="Get Started"
            >
              Contact
            </Button>
          </a>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

export function BlogHeader({ className }) {
  const [colorMode, setColorMode] = useColorMode('dark');
  return (
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <HmlcLogo />

          
          <Button
              variant="colorModeButton"
              onClick={e => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default')
              }}>
               {colorMode === 'default' ? '🌔' : '🌟'}
          </Button>
          <a target="_blank" rel="noopener" href="https://twitter.com/@hmlc_tweet" style={{ textDecoration: 'none' }}>
            <Button
              className="donate__btn"
              variant="secondary"
              aria-label="Get Started"
            >
              Contact
            </Button>
          </a>

        </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    py: [4, null, 5],
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      backgroundImage: ['none', null, null, null, `url("/assets/divider.svg")`],
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: 'contain',
      backgroundColor: ['#FEEDEF', null, null, null, 'transparent'],
      color: 'primary',
      fontWeight: 'bold',
      py: ['12px', null, null, null, 2],
      px: [3, null, null, null, 0],
      ':hover': {
        backgroundColor: ['primary', null, null, null, 'transparent'],
        color: ['white', null, null, null, 'primary'],
      },
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: 'heading',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: '20px',
      'nev > a': {
        color: 'heading',
      },
      '.donate__btn': {
        border: '0px solid',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    ml: 'auto',
    mr: 6,
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '16px',
      fontWeight: 'heading',
      px: 20,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      color: 'heading',
      '&.active': {
        color: 'primary',
      },
    },
  },
};
