import "./App.css";

const course = "React";
function App(props) {
  console.log(props);
  return (
    <>
      <header>
        <h1>Leo, {props.greeting}</h1>
        <h1>Alidu, {props.service}</h1>
        <button type="button" className="primay">
          Click Me
        </button>
      </header>
    </>
  );
}
export default App;
