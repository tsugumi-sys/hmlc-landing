/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heading, Text, Box, Button } from 'theme-ui'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Link from 'next/link'
import { BsFillBackspaceFill } from 'react-icons/bs'

export default function BlogBody({ content }) {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, fileName } = node.data.target.fields.file;
                return (
                    <img
                    src={url}
                    alt={fileName}
                    style={{ height: 'auto', width: '100%', margin: '1em 0' }}
                    />
                )
            },
            [BLOCKS.HEADING_1]: (node) => {
                const { value } = node.content[0];
                return (
                    <Heading as="h1" variant="heroPrimary">
                        {value}
                    </Heading>
                )
            },
            [BLOCKS.PARAGRAPH]: (node) => {
                const { value } = node.content[0];
                var hyperlink = {}
                for (var key of Object.keys(node.content)) {
                    if (node.content[key].nodeType == "hyperlink") {
                        hyperlink[key] = node.content[key]
                    }
                }
                return (
                    <Text as="p" variant="heroSecondary">
                        {value} {Object.keys(hyperlink).map(key => {
                            const { value } = hyperlink[key].content[0];
                            const { uri } = hyperlink[key].data;
                            return (
                                <a key={value} target="_blank" rel="nnoreferrer noopener" style={{ color: "#2FAB73" }} href={uri}>
                                    {value}
                                </a>
                            )
                        })}
                    </Text>
                )
            },
            [INLINES.HYPERLINK]: (node) => {
                const { uri } = node.data;
                const { value } = node.content[0];
                return (
                    <a target='_blank' rel='noreferrer noopener' style={{ color: '#2FAB73' }} href={uri}>
                        {value}
                    </a>
                )
            }
        }
    }
    return (
        <section sx={styles.body}>
            <Box sx={styles.wrapper}>
                {documentToReactComponents(content, options)}
            </Box>
            <Link href='/blog'>
                <a>
                    <Button
                        variant='blogButton'
                    >
                        <BsFillBackspaceFill style={{ width: '25px', height: '25px', marginTop: '3px' }}/>
                    </Button>
                </a>
            </Link>
        </section>
    )
}

const styles = {
    body: {
        pb: [9, 10, 9, null, null, 10],
        width: ['90%', '90%', '80%', '55%'],
        mx:'auto',
        backgroundColor: 'background'
    },
    wrapper: {
        p: [0, 2]
    }
}