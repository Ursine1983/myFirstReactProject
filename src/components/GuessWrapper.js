import MainImage from './MainImage';
import Guess from './Guess';
import Next from './Next';

const GuessWrapper = ({url, alt, answer, setAnswer, handleAnswer, fullImg, wrong, next}) => {
    if(wrong) {
        return (
            <div>
                <h3>Sorry { answer } is wrong.</h3>
                <MainImage url={fullImg} alt={alt} />
                <Next next={next} />
            </div>
        )
    }
    else {
        return (
            <div>
                <MainImage url={url} alt={alt} />
                <Guess answer={setAnswer} handleAnswer={handleAnswer} /> 
            </div>
        )  
    }
}

export default GuessWrapper