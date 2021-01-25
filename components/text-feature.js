/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link as ThemeLink } from 'theme-ui'
import List from 'components/list'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

export function TextFeatureNext({
  title,
  description,
  points,
  btnName,
  btnURL
}) {
  return (
    <Box sx={styles.card}>
        <Box sx={styles.wrapper}>
            <Heading as="h2" sx={styles.wrapper.title}>
                {title}
            </Heading>
            <Text as="p" className="description" sx={styles.wrapper.description}>
                {description}
            </Text>
        </Box>
        {points && <List items={points} childStyle={styles.listItem} />}

        {btnName && (
          <div className="next-link">
              <Link href={btnURL}>
                <a style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" aria-label={btnURL}>
                      {btnName}&nbsp;
                      <IoIosArrowForward />
                  </Button>
                </a>
              </Link>
          </div>
        )}
    </Box>
  );
}

export default function TextFeature({
    title,
    description,
    points,
    btnName,
    btnURL,
}) {
    return (
        <Box sx={styles.card}>
            <Box sx={styles.wrapper}>
                <Heading as="h2" sx={styles.wrapper.title}>
                    {title}
                </Heading>
                <Text as="p" className="description" sx={styles.wrapper.description}>
                    {description}
                </Text>
            </Box>
            {points && <List items={points} childStyle={styles.listItem} />}

            {btnName && (
                <ThemeLink href={btnURL} variant="default" className="btn__link">
                    <Button variant="secondary" aria-label={btnURL}>
                        {btnName}&nbsp;
                        <IoIosArrowForward />
                    </Button>
                </ThemeLink>
            )}
        </Box>
    );
}

const styles = {
    card: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexShrink: 0,
      '.btn__link': {
        mx: ['auto', null, null, 0],
      },
      '.list__box': {
        pt: [5, null, null, null, 6],
        width: '100%',
      },
      '.next-link': {
        marginTop: ['25px', '30px'],
        mx: ['auto', null, null, 0]
      },
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      mt: [-2, null, null, null, -3],
      title: {
        fontSize: [6, 7, 8, null, 9, null, 10],
        color: 'heading',
        lineHeight: [1.4, 1.45],
        fontWeight: 'body',
        fontFamily: 'heading',
        letterSpacing: 'heading',
        mb: [3, 4],
        px: [0, null, 7, 0],
      },
      description: {
        fontSize: [1, 2, null, null, '17px'],
        color: 'text_secondary',
        fontWeight: 'body',
        lineHeight: [1.9, 2, null, null, 2.2],
        px: [0, null, 7, 0],
      },
    },
    listItem: {
      fontWeight: 'heading',
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.75,
      marginBottom: [2, null, null, null, 3],
      alignItems: 'flex-start',
      justifyContent: ['center', null, null, 'flex-start'],
      color: 'text_secondary',
      '.list__icon': {
        width: [25, 30],
        height: 'auto',
        color: '#3FDBB1',
        padding: 0,
        fontSize: [2, 4],
        marginLeft: '-1px',
        flexShrink: 0,
        justifyContent: 'flex-start',
        marginTop: '4px',
      },
    },
  };