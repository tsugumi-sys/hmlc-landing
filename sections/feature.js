/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid } from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card'
// assets
const Marketplace = '/assets/feature/marketplace.svg';
const Gift = '/assets/feature/gift.svg';
const Award = '/assets/feature/award.svg';

const data = [
    {
        id: 1,
        imgSrc: Marketplace,
        altText: 'Marketplace',
        title: 'Machine Learning',
        text: '最近、機械学習が流行ってます。ライブラリやデータ、計算機サービスも豊富に存在していて、コストを抑えてたくさん遊べます。',
    },
    {
        id: 2,
        imgSrc: Gift,
        altText: 'Gift',
        title: 'Learn from Others',
        text: '機械学習は情報があふれていて、変化も大きいです。メンバーと情報交換をしたり、教え合いながらスピード感を持って自分の実力を伸ばしましょう。',
    },
    {
        id: 3,
        imgSrc: Award,
        altText: 'Award',
        title: 'Challenge',
        text: '機械学習を武器に、様々なことにチャレンジしましょう。機械学習アプリケーションを開発したり、Kaggleなどのコンペティションに参加しましょう。',
    }
];

export default function Feature() {
    return (
        <section sx={{ variant: 'section.feature' }} id="feature">
            <Container>
                <SectionHeader
                  title="Machine Learning LOVE💙"
                  description="機械学習は楽しいです。情報や意見をメンバーと交換し、時にはチームを組んで、自分のプロジェクトを押し進めましょう。"
                />

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <FeatureCard
                          key={item.id}
                          src={item.imgSrc}
                          alt={item.title}
                          title={item.title}
                          text={item.text}
                        />
                    ))}
                </Grid>

            </Container>
        </section>
    );
}

const styles = {
    grid: {
      pt: [0, null, null, null, null, null, null, null, 4],
      pb: [0, null, null, null, null, null, null, null, 6],
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
  };