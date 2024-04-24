import './homeButton.css';
interface Props {
  title: string,
  description: string
}
const HomeButton: React.FC<Props> = ({ title, description}) => {
  return (
    <div className='buttonContainer'>
      <button type='button' className='button buttonTitle'>
        <span className='buttonTitleSpan'>{title}</span>
        <div className='buttonDescriptionCollapse'>
          <span className='buttonDescription'>{description}</span>
        </div>
      </button>
    </div>
  )
}
export default HomeButton;