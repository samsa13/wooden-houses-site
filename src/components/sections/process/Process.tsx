
import { altBank } from '../../../assets/process-slider/alt.js';
import { useAction } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './process.scss'


const Process = () => {

  const position = useTypedSelector(state => state.num.num);
  const { setIncrease, setDecrease } = useAction();

  const next = () => setIncrease(position);
  const prev = () => setDecrease(position);

  return (

    <section id="process" className='process'>
      <h1>Процесс строительства хозяйственного блока</h1>


      <svg className="arrow-left" onClick={prev} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" /></svg>

      
        <img id='picture' className="slider" src={require("../../../assets/process-slider/" + (position).toString() + ".jpg")} alt={altBank[position]}
        />
  
      <svg className="arrow-right" onClick={next} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" /></svg>

    </section>
  )
}

export default Process
