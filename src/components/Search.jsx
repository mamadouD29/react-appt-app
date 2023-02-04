import { useState } from "react"
import { BiCaretDown, BiCheck } from "react-icons/bi"


const Dropdown = ({onOrderByChange, orderBy, onSortByChange, sortBy}) =>{
    return (
        <>
       
       <div className="dropdown-item px-2 " onClick={()=>onSortByChange("petName")}>Pet Name {(sortBy === "petName") &&  <BiCheck/>}</div>
       <div className="dropdown-item px-2" onClick={()=>onSortByChange("ownerName")}>Owner Name  {(sortBy === "ownerName") &&  <BiCheck/>}</div>
       <div className="dropdown-item px-2" onClick={()=>onSortByChange("aptDate")}>Date  {(sortBy === "aptDate") &&  <BiCheck/>}</div>
       <div className="dropdown-item px-2" onClick={()=>onOrderByChange("asc")}>Asc  {(orderBy === "asc") &&  <BiCheck/>}</div>
       <div className="dropdown-item px-2" onClick={()=>onOrderByChange("desc")}>Desc  {(orderBy === "desc") &&  <BiCheck/>}</div>
   </>
    )
}

const Search = ({onSearchChange, search, sortBy, onSortByChange, orderBy,onOrderByChange })=>{
    const[togglesort, setToggleSort] = useState(false)
    
    return (
        <div className="py-5 ">
           <div className="m-1">
                 <div className="mb-3">
                    <label htmlFor="search" className="mb-2">Search </label>
                    <input type="text" name="search" id="search" onChange={event => {onSearchChange(event.target.value)}} className="form-control" value={search} />
                 </div>             
                 <div className="mb-2 dropdown">
                    <button type="button" className="btn btn-primary"  onClick={()=>setToggleSort(!togglesort)}>Sort by <BiCaretDown/></button> {
                        togglesort && <div className="drowpdown-menu position-absolute border border-2 bg-light"> 
                        <Dropdown sortBy={sortBy} onSortByChange={mySort => onSortByChange(mySort)} orderBy={orderBy} onOrderByChange={myOrder => onOrderByChange(myOrder)}/>
                    </div>
 
                    }
                 </div>
           </div>
           
           
        </div>
    )
}


export default Search;