import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  DetailedContainer,
  Heading,
  Title,
  DirectionBtnList,
  ColorsContainer,
  InputCards,
  ColorValues,
  InputElement,
  BtnCard,
  BtnElement,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    directionInput: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #014f7b,#8ae323`,
  }

  onChangeFirstBgColorInput = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondBgColorInput = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onChangeDirectionInput = directionValue => {
    this.setState({
      directionInput: directionValue,
    })
  }

  onGenerateGradient = () => {
    const {directionInput, firstColorInput, secondColorInput} = this.state
    this.setState({
      gradientValue: `to ${directionInput}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  render() {
    const {
      firstColorInput,
      secondColorInput,
      directionInput,
      gradientValue,
    } = this.state

    console.log(directionInput)

    return (
      <BgContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <DetailedContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Title first>Choose Direction</Title>
          <DirectionBtnList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                directionDetails={eachDirection}
                onChangeDirectionInput={this.onChangeDirectionInput}
                selectedDirectionInput={directionInput}
                key={eachDirection.directionId}
              />
            ))}
          </DirectionBtnList>
          <Title>Pick the Colors</Title>
          <ColorsContainer>
            <InputCards>
              <ColorValues>{firstColorInput}</ColorValues>
              <InputElement
                type="color"
                value={firstColorInput}
                onChange={this.onChangeFirstBgColorInput}
                firstInput
              />
            </InputCards>
            <InputCards>
              <ColorValues>{secondColorInput}</ColorValues>
              <InputElement
                type="color"
                value={secondColorInput}
                onChange={this.onChangeSecondBgColorInput}
              />
            </InputCards>
          </ColorsContainer>
          <BtnCard>
            <BtnElement type="button" onClick={this.onGenerateGradient}>
              Generate
            </BtnElement>
          </BtnCard>
        </DetailedContainer>
      </BgContainer>
    )
  }
}

export default GradientGenerator
