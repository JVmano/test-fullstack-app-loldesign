import styled from 'styled-components'
import downArrow from '../../assets/down_arrow.svg'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 33rem;

  h2, h1 {
    text-align: center;
  }

  input {
    height: 2rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    margin-bottom: 1rem;
  }

  & > button:last-child {
    margin-top: 0;
  }

  span {
    color: #38ef7d;
  }
`

export const ButtonsGroup = styled.div`
  position: relative;
  display: flex;
  align-self: center;
`

export const Select = styled.select`
  background: transparent;
  background: url(${downArrow}) 96% 14.5px no-repeat;
  font-family: inherit;
  border: 0;
  border-bottom: 1px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  transition: border-color 0.2s;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: none;
  }
`
