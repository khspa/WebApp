import FrontPage from "./pages/FrontPage"
import Main from "./pages/App"
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div id={`pop-up-message`}></div>
      <Router>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/user">
          <FrontPage/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
