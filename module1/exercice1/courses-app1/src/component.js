const Header = (props) =>{
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
           <div>
                <h2>First part : {props.part1}</h2>
                <p>exercice : {props.exercises1}</p>
            </div>
            <div>
                <h2> Second part  {props.part2}</h2>
                <p> exercice : {props.exercises2}</p>
            </div>
            <div>
                <h2> Thirt part {props.part3}</h2>
                <p> exercice : {props.exercises3}</p>
            </div>
        </div>
        
    )
}

const Total = (props) => {
    return(
        <div>
            <h2>Total of parts =  {props.totalPart} </h2>
            <p> Total of exercise {props.totalExercises} </p>
        </div>
    )

}




export  {Header, Content, Total}