import Login from './frontend/Login/LoginPage'
import Register from './frontend/Register/Register'
import Screen from './frontend/Shows/Show'
import TheaterList from './frontend/Theater/TheaterList'
import { Switch , Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/getTheaters' component={TheaterList} />
        <Route exact path='/:theaterId/screen/:screen' component={Screen} />
        {/* <Route exact path='/getTickets' component={GetTickets} />  */}
      </Switch >
    </div>
  )
}

export default App;
