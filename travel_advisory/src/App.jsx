import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <List />
      <Map />
      <PlaceDetails />
    </div>
  );
}

export default App;
