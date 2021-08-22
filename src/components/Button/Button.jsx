
const Button = props => {

    return(
        <button onClick={props.onClick} className={`button ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button