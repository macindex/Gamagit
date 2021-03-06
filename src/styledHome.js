import styled from 'styled-components';


export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  align-items: center;
  justify-content: center;

`;


export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.85rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    height: 2rem;
    border: 1px solid #000000;
    background: #000000;
    padding: 0 .5rem;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

`;