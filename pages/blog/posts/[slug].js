/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from 'components/blogLayout'
import BlogHead from 'components/blog/blogHead'
import BlogBody from 'components/blog/blogBody'
import SEO from 'components/seo'
import { getPostBySlug, getMorePosts, getAllPostsWithSlug } from 'lib/index'

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug("hmlcBlogContent");
    return {
      paths: allPosts?.map(({ slug }) => `/blog/posts/${slug}`) ?? [],
      fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug, "hmlcBlogContent");
    const morePosts = await getMorePosts(params.slug, "hmlcBlogContent");
    return {
        props: {
            post: post ? post : null,
            morePosts: morePosts ? morePosts : null,
        },
        revalidate: 1,
    }
}

const Blog = ({ post }) => {
    const router = useRouter();

    if (!router.isFallback && !post) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <SEO
                description = '北大機械学習サークルHUMLのメンバーブログです。機械学習を自分の武器にして、様々なことにチャレンジするサークルです。'
                title = {post?.fields.title}
                ogTitle={post?.fields.title}
                ogDescription={post?.fields.subTitle}
                ogUrl={`https://hmlc.vercel.app/blog/post/${post?.fields.slug}`}
                ogImage={`https://${post?.fields.coverImage.fields.file.url}?fit=pad&w=1200&h=630`}
            />
            <BlogHead
              title={post?.fields.title}
              subtitle={post?.fields.subTitle}
              date={post?.fields.date}
              authorName={post?.fields.author.fields.name}
              authorImage={post?.fields.author.fields.image.fields.file.url}
              coverImage={post?.fields.coverImage.fields.file.url}
            />
            <BlogBody content={post?.fields.content} />
        </Layout>
    )
}

export default Blog;