/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid, Box, Heading, Text } from 'theme-ui'
import SectionHeader from 'components/section-header'

const data = [
    {
        id: 1,
        title: 'Having your own Project',
        text:
          '機械学習を使って実現したいこと、チャレンジしたいことを持っていることが望ましいです。機械学習を自分の武器にしたい人にお勧めです。',
    },
    {
        id: 2,
        title: 'Think and act for yourself',
        text: 
          '本サークルは放任型です。どんなことに取り組むか、どのようにやるか（チームを組むか...e.t.c）は自分で自由に決めてください。',
    },
    {
        id: 3,
        title: 'PC, WiFi & Free',
        text:
          '必要なのはパソコンとWi-Fiだけです。活動費用は0円です。',
    }
];

export default function WorkFlow() {
    return (
        <section sx={{ variant: 'section.workflow' }} id="feedback">
            <Container>
                <SectionHeader
                  title="What you need"
                  description="本サークルは、機械学習を手段にして何かをしたい人、すでにしている人を募集しています。技術レベルは問いません。"
                />

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <Box sx={styles.card} key={item.id}>
                            <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
                            <Box sx={styles.wrapper}>
                                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                                <Text sx={styles.wrapper.description}>{item.text}</Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    grid: {
      pt: [0, null, null, null, null, null, null, null, 3],
      pb: [0, null, null, null, null, null, null, null, 5],
      mb: -1,
      gridGap: [
        '40px',
        '45px',
        '45px 30px',
        null,
        '60px 30px',
        '50px 40px',
        null,
        '75px',
      ],
      gridTemplateColumns: [
        'repeat(1,1fr)',
        null,
        'repeat(2,1fr)',
        null,
        'repeat(3,1fr)',
      ],
    },
    card: {
      display: 'flex',
      flexDirection: ['column', null, null, 'row'],
      textAlign: ['center', null, 'left'],
      px: [0, 5, 0],
    },
  
    iconBox: {
      flexShrink: 0,
      mb: [4, null, null, 0],
      fontSize: [8, 9, null, null, 10, null, null, 11],
      fontWeight: 300,
      fontFamily: 'special',
      color: 'heading',
      lineHeight: 1,
      letterSpacing: 'heading',
      mr: ['auto', null, 0, 4, null, null, null, 5],
      ml: ['auto', null, 0],
      mt: [0, null, null, -1],
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      mt: '-5px',
      description: {
        fontSize: [1, 2],
        fontWeight: 'body',
        lineHeight: 1.9,
        pt: 2,
      },
    },
  };