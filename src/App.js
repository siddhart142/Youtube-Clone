import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from 'react-redux';
import store from './Utils/store';
  {/*
      Head
      Body
        Sidebar
          menuitems
        maincontainer
          buttonlist
          videocontainer
            videoCard
   */}
function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
