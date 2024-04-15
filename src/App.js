import "./styles.css";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// Намутила
// function DateNow(props){

// const [date,setDate]=useState(Date.now());

// useEffect(() => {
//   if (props.count > 0) {
//     const newDate = new Date(Date.now() + props.count * 86400000).toString();
//     setDate(newDate);
//   }else{
//     const newDate = new Date(Date.now() - props.count * 86400000).toString();
//     setDate(newDate);
//   }
// }, [props.count]);

//  return(
//   <div>{props.count===0 && `Today is ${date}` }
//     {props.count>0 && `${props.count} days it will be ${date}`}
//     {props.count<0 && ` ${Math.abs(props.count)} days ago it was ${date}`}
//   </div>
//  )
// }
