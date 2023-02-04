import {BiCalendar } from "react-icons/bi";
// import appoitmentList from "./data.json"
import AddAppointment from "./components/AddAppointment";
import AppointmentList from "./components/AppointmentList";
import Search from "./components/Search";
import { useCallback, useEffect, useState } from "react";


function App() {

  let [appoitmentList, setAppointmentList] = useState([])

  let [search, setSearch] = useState("")

  let [sortBy, setSortBy] = useState("petName")
  let [orderBy, setOrderBy] = useState("asc")

  const filterApt = appoitmentList.filter(
    item =>{
      return(
        item.petName.toLowerCase().includes(search.toLowerCase()) || 
        item.ownerName.toLowerCase().includes(search.toLowerCase()) || 
        item.aptNotes.toLowerCase().includes(search.toLowerCase())
      )
    }
  ).sort((a,b) => {
    let order = (orderBy === "asc") ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1*order
    )
  })


  const fetchData= useCallback(()=>{
    fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    })
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])

  const handleDelete =(aptId)=>{
    console.log(aptId);
    const newList = appoitmentList.filter((aptList)=> aptList.id !== aptId)

    setAppointmentList(newList)
  }

  return (
    <div className="container pb-5">
      <h1>
        <BiCalendar className="bicalendar" />Your Appointments
      </h1>
      <AddAppointment onSendAppointment={myAppt => setAppointmentList([...appoitmentList, myAppt])} lastId={appoitmentList.reduce((max, item)=> Number(item.id)> max ? Number(item.id): max, 0)} />
      
      <Search search={search} onSearchChange={mySearch =>setSearch(mySearch)} orderBy = {orderBy} onOrderByChange ={mySort => setOrderBy(mySort)} sortBy={sortBy} onSortByChange={mySort => setSortBy(mySort)}/>

      <AppointmentList lists={filterApt} onDeleteApt={
        handleDelete
      }/>
    
      
      

    </div>
  );
}

export default App;
