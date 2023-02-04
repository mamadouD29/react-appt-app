
import {TbTrash } from "react-icons/tb";


const AppointmentList = ({lists, onDeleteApt}) =>{


  return (
        <div className="">
        <ul className="p-0">
        {
          lists.map(aptList =>
          
              <li key={aptList.id}  className="d-flex align-items-center px-2 mb-2">
                <button type="button" className="btn btn-danger m-2 d-flex align-items-center" onClick={()=>onDeleteApt(aptList.id)}><TbTrash /></button>

                <div className="w-100">
                  <div className="d-flex justify-content-between align-item-center px-2">
                    <span>{aptList.petName}</span>
                    <span>{aptList.aptDate}</span>
                  </div>

                  <div className="mb-2">Owner: <b>{aptList.ownerName}</b></div>

                  <div className="mb-2">Notes : {aptList.aptNotes} </div>
             
                </div>
             </li>
            )
            
        }
      </ul>
        </div>
    )
}


export default AppointmentList