import {ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    directionDetails,
    onChangeDirectionInput,
    selectedDirectionInput,
  } = props

  const {displayText, value} = directionDetails

  const onClickBtn = () => {
    onChangeDirectionInput(value)
  }

  return (
    <li>
      <ButtonElement
        type="button"
        isActive={selectedDirectionInput === value}
        onClick={onClickBtn}
      >
        {displayText}
      </ButtonElement>
    </li>
  )
}
export default GradientDirectionItem
