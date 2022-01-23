import './App.css';
import Header from "./Components/Header/Header";
import MapView from "./Components/Maps/Maps";

function App() {

  return (
    <div className="App">
      <Header/>
      <MapView />

      {/* {user && <div ref={mapContainer} className="map-container" />}
      {!user && 
        <div className='unSigned'>
          <h3>Please sign in to access the map</h3>
        </div>
      } */}
    </div>
  );
}

export default App;
