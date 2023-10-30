const Button = ({handleAnecdote, text}) =>{
return(
    <button onClick={handleAnecdote}>
        {text}
    </button>
)
}

export default Button