/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Box } from 'theme-ui'
import SectionHeader from 'components/section-header'
import Image from 'components/image'
// assets
const SupportTeam = '/assets/images/support-thumb.png';

export default function Support() {
    return (
        <section sx={{ variant: 'section.support' }} id='support'>
            <Container>
                <SectionHeader
                  title="Meet our team who always love mahcine learning method."
                  description="この写真に写っている誰一人もサークルのメンバーではありません。"
                />

                <Box sx={styles.thumbWrapper}>
                    <Image
                      src={SupportTeam}
                      alt="Support Team"
                      width="992"
                      height="531"
                    />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    thumbWrapper: {
        display: 'flex',
        justifyContent: 'center',
        img: {
            height: [180, 'auto']
        }
    }
}