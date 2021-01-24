/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState } from 'react'
import { jsx } from 'theme-ui'
import { Flex, Button, Input } from 'theme-ui'

export default function Subscirbe() {
    // 1. Create a reference to input so we can fetch / clear it's value
    const inputEl = useRef(null);
    // 2. Hold a status in state to handle the response from our API
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    
    const subscribe = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({...prevStatus, submitting: true }));
        console.log('Submitted')
        setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: null }
        })
    }
    return (
        <div className="subscribe__area">
            <form onSubmit={subscribe}>
                <Flex sx={styles.subscribeForm}>
                    <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
                        Email Address
                    </label>
                    <Input
                      ref={inputEl}
                      iD="email"
                      name="email"
                      type="email"
                      placeholder="Enter your Email"
                    />

                    <div>
                        {status.info.error && (
                            <div className="error">Error: {status.info.msg}</div>
                        )}
                        {!status.info.error && status.info.msg && (
                            <div className="success">{status.info.msg}</div>
                        )}
                    </div>

                    <Button
                      type="submit"
                      disabled={status.submitting}
                      variant="subscribeButton"
                    >
                        {!status.submitting
                          ? !status.submitted
                            ? 'Subscribe'
                            : 'Submitted'
                          : 'Submitting...'}
                    </Button>
                </Flex>
            </form>
        </div>
    )
}

const styles = {
    subscribeForm: {
      width: '100%',
      mx: 'auto',
      '[type="email"]': {
        border: '1px solid #D4DAE2',
        borderRadius: '7px',
        fontFamily: 'body',
        fontSize: [1, 2, 3],
        fontWeight: 'body',
        color: 'heading',
        py: 1,
        px: [3, 5],
        backgroundColor: 'transparent',
        transition: 'all 0.25s',
        height: ['50px', '60px'],
        '&:focus': {
          boxShadow: '0 0 0 0px',
          borderColor: 'primary',
        },
        '::placeholder': {
          color: '#9A9CB2',
          opacity: 1,
        },
      },
    },
  };