import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  @media screen and (max-width: 800px) {
      width: 20%;
      padding-right: 20px;
  }
`;

export const Image = styled.img`
  width: 100%; 
  height: 100%;
`

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
      width: 22%;
      padding-left: 7px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

QuantityContainer.displayName = 'QuantityContainer'

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
      padding-left: 8px;
    }
`;

RemoveButtonContainer.displayName = 'RemoveButtonContainer'