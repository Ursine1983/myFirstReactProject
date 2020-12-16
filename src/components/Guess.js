const Guess = ({answer, handleAnswer}) => (
    <div>
        <input onChange={answer} type="text" />
        <button onClick={handleAnswer}>Guess!</button>
    </div>
)

export default Guess