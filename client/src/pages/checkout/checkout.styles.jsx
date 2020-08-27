import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin-left:  auto;
        margin-top: 50px;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #a9a9a9;
    font-size: 20px;

    @media screen and (max-width: 800px) {
        width: 100%;
        white-space: pre-line;
        font-size: 18px;
    }
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        width: 23%;

        &:last-child {
            width: 12%;
        }
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;