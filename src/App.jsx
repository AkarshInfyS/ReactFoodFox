import './App.css'
import BodyComponent from './Components/BodyComponent'
import HeaderComponent from './Components/HeaderComponent'
import restaurantList from './Components/RestaurantData'
function App() {
  return (
    <>
    <HeaderComponent/>
    <BodyComponent hotelData={restaurantList}/>
    </>
  )
}

export default App
