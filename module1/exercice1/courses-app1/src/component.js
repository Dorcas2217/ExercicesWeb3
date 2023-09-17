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
            <Part part={props.parts[0]}/>
            <Part part={props.parts[1]}/>
            <Part part={props.parts[2]}/>
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

const Part = (props) => {
    return (
        <p>{props.part.part} {props.part.ex}</p>   
    );
  };
  



export  {Header, Content, Total}