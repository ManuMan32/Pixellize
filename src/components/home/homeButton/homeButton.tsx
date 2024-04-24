import './homeButton.css';
interface Props {
  title: string,
  description: string,
  onClick?: () => void
}
const HomeButton: React.FC<Props> = ({ title, description, onClick = () => void 0 }) => {
  return (
    <div className='buttonContainer'>
      <button type='button' className='button buttonTitle' onClick={onClick}>
        <span className='buttonTitleSpan'>{title}</span>
        <div className='buttonDescriptionCollapse'>
          <span className='buttonDescription'>{description}</span>
        </div>
      </button>
    </div>
  )
}
export default HomeButton;