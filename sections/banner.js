/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui'
import Link from 'next/link'
// assets
const BannerThumb = '/assets/images/banner-thumb.png';

export default function Banner() {
    return (
        <section sx={styles.banner} id="home">
            <Container sx={styles.banner.container}>
                <Box sx={styles.banner.contentBox}>
                    <Heading as="h1" variant="heroPrimary">
                        Machine Learning for your study, task or hobby ...e.t.c
                    </Heading>
                    <Text as="p" variant="heroSecondary">
                        HMLCは機械学習を使って楽しいことをする人のためのサークルです。
                        Python, Julia, TensorFlow, Pytorch e.t.c...言語、ライブラリはメンバーそれぞれです。
                    </Text>
                    <Box sx={styles.linkButton}>
                      <Link href="https://twitter.com/@hmlc_tweet">
                        <a target="_blank" rel="noopener">
                          <Button
                            sx={styles.button}
                          >
                            Contact Us
                        
                          </Button>
                        </a>
                      </Link>
                    </Box>
                </Box>

                <Box sx={styles.banner.imageBox}>
                    <Image src={BannerThumb} alt="banner" width="740" height="782" />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    banner: {
      overflow: ['hidden', 'initial', null, null, 'hidden'],
      pt: ['150px', '145px'],
      pb: [0, null, null, null, 2],
      container: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
      },
      contentBox: {
        width: ['100%', 430, 550, '75%', '50%', '45%'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexShrink: 0,
        pt: [0, null, null, null, null, 6, 7, '70px'],
        mb: ['60px', null, null, null, 0],
        mx: [0, 'auto'],
        textAlign: ['center', null, null, null, 'left'],
        '.subscribe__area': {
          width: '100%',
          pr: [0, null, null, null, 6, '65px'],
          mb: ['35px', null, '45px'],
        },
      },
      imageBox: {
        justifyContent: 'center',
        textAlign: ['center', null, null, null, 'right'],
        mr: [0, null, null, null, null, null, -6, -7],
        pl: [0, null, '40px'],
        mb: [-2, null],
        img: {
          height: [360, 'auto'],
        },
      },
    },
    linkButton: {
      width: '100%'
    },
    button: {
      variant: "subscribeButton",
      px: 3,
      py: 4,
      width: ['80%', '50%'],
    }
  };
  