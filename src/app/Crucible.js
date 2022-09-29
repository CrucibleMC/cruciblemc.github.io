import './Crucible.css';
import Home from "./home/Home";
import Menu from "./menu/Menu";

function Crucible() {
  return (
     <div>
         <Menu/>
         <div className="App container mx-auto">
             <Home/>
         </div>
     </div>
  );
}

export default Crucible;
