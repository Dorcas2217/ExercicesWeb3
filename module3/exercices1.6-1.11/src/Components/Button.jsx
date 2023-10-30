const Button = ({handleCilck, text}) => {

    return (
        <button onClick={handleCilck}> {text} </button>
    )
}

export default Button