/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heading, Box, Image, Text } from 'theme-ui'
import moment from 'moment'

export default function BlogBody ({ 
    title,
    subtitle,
    date,
    authorName,
    authorImage,
    coverImage
}) {
    return (
        <section sx={styles.body}>
            <Image src={coverImage} alt="blog coverimage" sx={styles.coverImage} />
            <Box sx={styles.wrapper}>
                <Heading as="h1" variant="heroPrimary">
                    {title}
                </Heading>
                <Heading as="h1" variant="blogSubTitle">
                    {subtitle}
                </Heading>
                <Box sx={styles.authorWrapper}>
                    <Image src={authorImage} alt="author image" sx={styles.authorImage} />
                    <Box sx={styles.authorBox}>
                        <Text as="p" sx={styles.authorName}>
                            Authored by {authorName}
                        </Text>
                        <Text as="p" sx={styles.date}>
                            {moment(date).format("MMMM Do YYYY")}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

const styles = {
    body: {
        pt: [9, 10, 9, null, null, 10],
        pb: [5, 6, 5, null, null, 6],
        width: ['90%', '90%', '80%', '55%'],
        mx:'auto',
        backgroundColor: 'background'
    },
    authorBox: {
        display: 'flex',
        flexDirection: 'column',
        mx: [2, 5]
    },
    authorImage: {
        objectFit: 'cover',
        width: "50px",
        height: "50px",
        borderRadius: "50%"
    },
    authorWrapper: {
        display: 'flex',
        flexDirection:  'row',
        justifyContent: 'left',
        mt: 2
    },
    wrapper: {
        px: [0, 3]
    },
    coverImage: {
        objectFit: 'cover',
        objectPosition: '0 auto',
        width: '100%',
        height: ['200px', '300px'],
    }
}