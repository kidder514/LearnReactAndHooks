import { AppStateProvider } from './context/AppStateContext';
import Login from './Login';
import Worklist from './Worklist';
import StatePlayGround from './StatePlayGround';
import RefPlayGround from './RefPlayGround';

function App() {
  return (
    <div>
      <AppStateProvider>
        <Login />
        <hr />
        <Worklist />
        <hr />
        <StatePlayGround />
        <hr />
        <RefPlayGround />
      </AppStateProvider>
    </div>
  );
}

export default App;
