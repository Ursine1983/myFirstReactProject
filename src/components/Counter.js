const Counter = ({total, success}) => {
    return(<div>
        <div>
            <span>Totla cards guessed: </span>
            <span>{total}</span>
        </div>
        <div>
            <span>Correct guesses: </span>
            <span>{success}</span>
        </div>
    </div>)        
}

export default Counter