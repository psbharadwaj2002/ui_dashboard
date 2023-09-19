import MainBody from "./components/MainBody";
import SideBar from "./components/SideBar";
import "../src/App.css"


function App() {
  return (
    <div className="App">
      <div id="sideBar"><SideBar/></div>
      <div id="mainBody"><MainBody/></div>
    </div>
  );
}

export default App;
