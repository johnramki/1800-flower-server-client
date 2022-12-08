import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/Header";
import { Search } from "./component/Search";

function App() {
  return (
    <div style={{backgroundColor:'#f2f2f2'}} className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
