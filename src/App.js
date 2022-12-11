import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Searchform from './component/searchform';
import Googlemap from "./component/googlemap";
import store from "./Redux/store";
import {Provider} from "react-redux";
import history from "./history";
const App = (props)=> {



  return (
    <Provider store= {store}>
        <div className="container-fluid mt-1">
          <div className="row">
              <Searchform/>
          </div>
        </div>
    </Provider>
  )
}
export default App;
