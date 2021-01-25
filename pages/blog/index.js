/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid } from 'theme-ui'
import Layout from 'components/blogLayout'
import SectionHeader from 'components/section-header'
import PostCard from "components/blog/postCard"
import { getAllPosts } from 'lib/index'
import SEO from 'components/seo'

export async function getStaticProps() {
    const posts = await getAllPosts("hmlcBlogContent");
    return { revalidate: 1, props: { posts } };
};

export default function  Blog({ posts }) {
    return (
        <Layout>
            <SEO
                description = '北大機械学習サークルHUMLのメンバーブログです。機械学習を自分の武器にして、様々なことにチャレンジするサークルです。'
                title = '北大機械学習サークルメンバーブログ'
                ogTitle='北大機械学習サークルメンバーブログ'
                ogDescription='北大機械学習サークルHUMLのメンバーブログです。機械学習を自分の武器にして、様々なことにチャレンジするサークルです。'
                ogUrl={`https://hmlc.vercel.app/blog/post/`}
                ogImage={`https://hmlc.vercel.app/assets/hmlc-blog.png`}
            />
            <section sx={{ 
                variant: 'section.feature', 
            }}>
                <Container>
                    <SectionHeader
                        title="HMLC Members Blog 🚀"
                        description="HMLCメンバーが書いているブログです。自分が取り組んでいるプロジェクトと、技術スタックについて書いています。それぞれ、githubでコードを公開していますので、ポスト内のリンクから見れます。"
                    />
                    <Grid sx={styles.grid}>
                        {posts?.map(({ fields }) => (
                            <PostCard
                                key={fields.title}
                                title={fields.title}
                                subtitle={fields.subTitle}
                                authorName={fields.author.fields.name}
                                authorImage={fields.author.fields.image.fields.file.url}
                                slug={fields.slug}
                                date={fields.date}
                                coverImage={fields.coverImage.fields.file.url}
                            />
                        ))}
                    </Grid>
                </Container>
            </section>
        </Layout>
    );
}

const styles = {
    grid: {
      pt: [0, null, null, null, null, null, null, null, 4],
      pb: [10, null, null, null, null, null, null, null, 6],
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