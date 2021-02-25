import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
  return (
      <Sidebar name={props.state.userProfile}/>
  );
}

export default App;
