import { FaTwitter, FaGithub } from 'react-icons/fa'
import {
    DiCodeigniter
} from 'react-icons/di'

export default [
    {
        header: 'About Us',
        items: [
            {
                path: '/blog',
                label: 'Blog'
            }
        ]
    },
    {
        header: 'Socials',
        items: [
            {
                path: 'https://twitter.com/@hmlc_tweet',
                label: 'Twitter',
                name: 'twitter',
                icon: <FaTwitter />,
            },
            {
                path: 'https://github.com/tsugumi-sys/hmlc-landing',
                label: 'Github',
                name: 'github',
                icon: <FaGithub />,
            },
            {
                path: 'https://hulc.vercel.app/',
                label: 'HULC',
                name: 'hulc',
                icon: <DiCodeigniter />,
            }
        ]
    }
]