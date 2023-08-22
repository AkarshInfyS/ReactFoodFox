/* eslint-disable react/prop-types */
//import restaurantList from './RestaurantData'
import { useState} from "react"

// function filteringData(search,restData){
//   const filterData = restData.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
//   return filterData;
// }

const BodyComponent = (props) => {
  const [search, setSearch] = useState("")
  const [ restData,setRestData]=useState(props.hotelData)

  const srchHandler = (event)=>{
    setSearch(event.target.value)
  }
  const btnHandler=()=>{
    const data = restData.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    setRestData(data)
    setSearch("")
    }

  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder="Search" onChange={srchHandler} value={search}/>
        <button type="button" className="searchBtn" onClick={btnHandler} >Search</button>
    </div>
    <div className='container'>
    {restData.map((item)=>{
      return (
        <div className="card" key={item.id}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+item.cloudinaryImageId} alt="" />
            <h2>{item.name}</h2>
            <h4>{item.avgRating}</h4>
            <h3>{item.cuisines.join(", ")}</h3>
          </div>
      )
    })}
 
    </div>
    
    </>
  )
  }
export default BodyComponent
