import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from 'react-redux';
import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
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

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [{
    path : "/",
    element : <MainContainer/>
  },
  {
    path : "/watch",
    element : <WatchPage/>
  }
]
}]
  
)
function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Head/>
      <RouterProvider router = {appRouter} />
    </div>
    </Provider>
  );
}

export default App;
