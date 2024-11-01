import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DetailedContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: auto;
  text-align: center;
  @media (min-width: 768px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  color: #ededed;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const Title = styled.p`
  color: #ffffff79;
  font-size: ${props => (props.first ? 17 : 16)}px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: ${props => (props.first ? 22 : 21)}px;
  }
`

export const DirectionBtnList = styled.ul`
  list-style-type: none;
  margin: 30px 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 30px;
  }
`
export const ColorsContainer = styled.div`
  width: 400px;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
`

export const InputCards = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const ColorValues = styled.p`
  color: #ffffff79;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const InputElement = styled.input`
  margin-top: 15px;
  width: 110px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #1e293b;
  outline: none;
  padding: 0px;
  background-color: ${props => (props.firstInput ? props.value : props.value)};
`

export const BtnElement = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  width: 140px;
  padding: 10px 0px;
  border-width: 0px;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const BtnCard = styled.div`
  text-align: center;
  margin-top: 30px;
`
