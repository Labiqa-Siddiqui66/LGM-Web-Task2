import './App.css';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import User from './components/User';
import Usercard from './components/Usercard';
function App() {
  const [Loader, setLoader] = useState(0);
  return (
    <div>
      <User setLoader={setLoader} />
      <LoadingBar
        height={3}
        color='#f11919'
        Loader={Loader}

      />
      <Usercard />
    </div>
  );
}

export default App;
