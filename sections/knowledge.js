/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import TextFeature from 'components/text-feature'
import Image from 'components/image'
// assets
const KnowledgeThumb = '/assets/images/knowledge-thumb.png';

const data = {
    title: 'Make a small but powerful team including you and try your projects.',
    description:
      '頼もしいメンバーを見つけて少数精鋭のチームを組み、協力して自分の実現したいプロジェクトに取り組むことができます。コンペに参加したり、アプリケーションを一緒に作りましょう。',
    btnName: 'Explore Details',
    btnURL: '#',
};

export default function Knowledge() {
    return (
        <section sx={{ variant: 'section.knowledge' }}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <TextFeature
                      title={data.title}
                      description={data.description}
                      btnName={data.btnName}
                      btnURL={data.btnURL}
                    />
                </Box>
                <Box sx={styles.thumbnail}>
                    <Image
                      src={KnowledgeThumb}
                      alt='Thumbnail'
                      width='632'
                      height='750'
                    />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['flex-Start', null, null, 'space-between'],
      flexWrap: ['wrap', null, null, 'nowrap'],
    },
    thumbnail: {
      pl: [0, null, null, 4, 7, 8, 9],
      pr: [0, null, null, null, 2, 9, 6],
      display: 'flex',
      mx: ['auto', null, null, 0],
      img: {
        height: [400, 'auto'],
      },
    },
    contentBox: {
      flexShrink: 0,
      textAlign: ['center', null, null, 'left'],
      width: ['100%', null, null, 365, 420, 430, '490px'],
      pb: [7, null, null, 0],
      '.description': {
        pr: [0, null, 7, 5],
      },
      '.btn__link': {
        mt: [5, null, null, 6],
      },
    },
  };
  

