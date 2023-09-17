import he from './he.png'

const Header = (props) =>{
    return (
        <div>
            <h1>
                {props.course}
            </h1>
            <img src={he} alt="he" />
        </div>
    )
}

export default Header;