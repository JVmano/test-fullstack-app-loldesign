import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  margin: 12px 0 0;

  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  input:focus {
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 2px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
    transition: ease-in-out 0.4s;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`
