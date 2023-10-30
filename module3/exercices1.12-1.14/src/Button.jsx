const Button = ({handleAnecdote, text}) =>{
return(
    <button onClick={handleAnecdote}>
        {text}
    </button>
)
}

const Vote = ({handleVote, text}) =>{

    return(
    <button onClick={handleVote}> 
        {text}
    </button>
    )
}

export {
    Button, Vote
}