import styled from 'styled-components'

export const SignUpAndSignInContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
      width: 100%;
      flex-wrap: wrap;
    }
`;