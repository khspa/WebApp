import FrontPage from "./pages/FrontPage"
import Main from "./pages/App"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore  } from 'redux'
import allReducer from 'features/CombinedReducer'

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
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
    </Provider>

  );
}

export default App;
