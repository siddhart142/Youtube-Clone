import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
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
    <div className="font-extrabold">
      <Head/>
      <Body/>
    </div>
  );
}

export default App;
