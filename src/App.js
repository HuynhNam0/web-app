import logo from "./logo.svg";

function App() {
  const onClickHandle = () => {
    console.log(`${process.env.REACT_APP_MY_KEY}`, "Anh yêu em");
  };
  return (
    <div className="App">
      <button onClick={onClickHandle}> Click Me </button>{" "}
    </div>
  );
}

export default App;
