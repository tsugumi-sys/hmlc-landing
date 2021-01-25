/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui'
import Link from 'next/link'
import moment from "moment";

export default function PostCard({
    title,
    subtitle,
    authorName,
    authorImage,
    slug,
    date,
    coverImage
}) {
    return (
        <Link href={`/blog/posts/${slug}`}>
            <a style={{ textDecoration: 'none'}}>
                <Box sx={styles.card}>
                    <Image src={coverImage} alt="sss" sx={styles.img} /> 
                    <Box sx={styles.wrapper}>
                        <Box sx={styles.innerWrapper}>
                            <Heading sx={{ variant: 'text.heading' }}>
                                {title.length > 10 ? title.substr(0, 9) + "..." : title }
                            </Heading>
                            <Text as="p" sx={styles.wrapper.date}>{moment(date).format("MM/DD/YYYY")}</Text>
                        </Box>
                        <Text as="p" sx={styles.wrapper.description}>
                            {subtitle.length > 25 ? subtitle.substr(0, 24)+"..." : subtitle}
                        </Text>
                        <Box sx={styles.innerWrapper}>
                            <Image src={authorImage} alt="authorImage" sx={styles.authorImage} />
                            <Text as="p" sx={styles.wrapper.authorName}>
                                Authored by {authorName}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </a>
        </Link>
    );
}


const styles = {
    card: {
      backgroundColor: 'blog_background',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      borderRadius: 5,
      px: [0, 5, 0],
    },
  
    img: {
      borderRadius: '10px 10px 0 0',
      objectFit: 'cover',
      width: '100%',
      height: ['150px', '175px'],
      flexShrink: 0,
      mr: ['auto', null, 4, 5, null, null, null, 6],
      mb: ['22px', 5],
      ml: 'auto',
    },
    authorImage: {
        objectFit: 'cover',
        width: "50px",
        height: "50px",
        borderRadius: "50%"
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      mt: ['-4px', '-7px'],
      px: 3,
      mb: 2,
      description: {
        color: 'blog_cardText',
        fontSize: [1, 2],
        fontWeight: 'body',
        lineHeight: 1.9,
        pt: 0,
        mb: 2
      },
      date: {
          color: 'blog_cardText'
      },
      authorName: {
          color: 'heading',
          mt: 2
      }
    },
    innerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  };
  