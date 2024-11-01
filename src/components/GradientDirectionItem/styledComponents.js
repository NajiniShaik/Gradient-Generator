import styled from 'styled-components'

export const ButtonElement = styled.button`
  background-color: #ededed;
  color: #334155;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  width: 110px;
  padding: 10px 0px;
  border-radius: 4px;
  border-width: 0px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
