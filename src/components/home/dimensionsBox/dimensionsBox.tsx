import './dimensionsBox.css';
interface Props {
  axis: "X" | "Y"
}
const DimensionsBox: React.FC<Props> = ({ axis }) => {
  return (
    <div className={'box dimensionsBox' + axis}>
      <span className='dimensionsBoxText'>Set the {axis} size (in pixels)</span>
      <div className='dimensionsBoxInputContainer'>
        <input className='button dimensionsBoxInput' type='number' defaultValue={50} placeholder='Number' max={256} min={0} onChange={e => {
          if (parseInt(e.target.value) > 256) e.target.value = "256";
          else if (parseInt(e.target.value) < 0) e.target.value = "0";
        }} />
      </div>
    </div>
  )
}
export default DimensionsBox;