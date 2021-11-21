import Input from "./Input";
import useSemiPersistenceState from "./useSemiPersistenceState";
function App() {
const [state,setstate,prevState] = useSemiPersistenceState('state',"")
const textHandler=(e)=>{
    return(
      setstate(e.target.value)
    )
  }
  return (
  <div>
    <center><Input id={'type'} type={'text'} OnTextChange={textHandler}><b>Search</b></Input>
    <p>Searching:<b>{state}</b></p>
    <p>Searched:<b>{prevState}</b></p></center>
  </div>
  );
}
export default App;