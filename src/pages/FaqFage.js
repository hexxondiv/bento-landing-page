import React from 'react'
import styled from 'styled-components'
import FAQs from '../components/FAQs'

const Wrapper = styled.div`
min-height: 40vh;
`

function FaqFage() {
    return (
        <Wrapper>
            <FAQs />
        </Wrapper>
    )
}

export default FaqFage