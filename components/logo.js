/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui'
import { Link } from 'components/link'
import { FcBiohazard } from 'react-icons/fc' 

export default function Logo({ src, ...rest }) {
    return (
        <Link
          path="/"
          sx={{
              variant: 'links.logo',
              display: 'flex',
              cursor: 'pointer',
              mr: 15,
          }}
          {...rest}
        >
            <Image src={src} alt="startup landing logo" />
        </Link>
    )
};

export function HmlcLogo() {
    return (
        <Link
          path="/"
          sx={{
              variant: 'text.heading',
              display: 'flex',
              cursor: 'pointer',
              textDecoration: 'none',
              mr: 15
          }}
        >
            <FcBiohazard style={{ width:'30px', height: '30px' }}/>
            <Text as="p">
                HMLC
            </Text>
        </Link>
    )
}