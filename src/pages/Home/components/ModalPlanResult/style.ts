import styled, { css } from 'styled-components'
import { ModalProps } from '../../types/HomePageTypesProvider'

export const ModalContainer = styled.div<ModalProps>`
  ${(ModalProps) =>
    ModalProps.active === true
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(330.6deg, #3562ff -90.56%, #15131d 48.62%);
  z-index: 8;
`

export const ModalBox = styled.div`
  position: relative;
  justify-content: center;
  position: relative;
  display: flex;
  height: auto;
  max-height: 730px;
  border-radius: 8px;
`

export const ModalCloseButtonBox = styled.div`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: 15px;
  top: 15px;
  font-size: 24px;
  border-radius: 50px;

  button {
    background: transparent;
    border: 0 solid;
    box-shadow: none;
    padding: 0;
  }

  button:hover {
    background: transparent;
    box-shadow: none;
    cursor: pointer;
  }

  button > svg {
    width: 1.7em;
    height: 1.7em;
    border-radius: 50%;
    transition: ease-in-out 0.2s;
  }

  button > svg:hover {
    background: rgba(172, 172, 172, 0.3);
    transition: ease-in-out 0.2s;
  }
`

export const ModalFormContainer = styled.div`
  padding-top: 10px;

  input {
    margin-bottom: 30px;
  }

  input > label:last-child {
    margin-bottom: 0;
  }

  div {
    width: 100%;
    text-align: center;
  }

  label div {
    width: 100%;
    max-width: 100%;
  }

  label {
    font-size: 16px;
    color: white;
  }
`

export const ModalFormContent = styled.div`
  text-align: center;
  position: relative;

  h3 {
    font-weight: normal;
  }
`

export const ModalBoxBack = styled.div`
  width: 100%;
  min-width: 375px;
  padding: 55px 50px;
  background: linear-gradient(99.58deg, #3562ff -2433.88%, #090909 83.07%);
  border: 1px solid #464646;
  box-sizing: border-box;
  box-shadow: 0px 0px 47px 14px rgba(0, 0, 0, 0.35);
  border-radius: 20px;

  button > svg > path {
    stroke: #fff;
  }
`
