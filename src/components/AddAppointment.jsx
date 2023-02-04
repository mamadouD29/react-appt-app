import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi"

const AddAppointment = ({onSendAppointment, lastId}) => {

    const clearData = {
        ownerName: "",
        petName: "",
        aptDate: "", 
        aptTime: "",
        aptNotes: ""
    }

    let [toggleForm, setToggleForm] = useState(false)
    let [formData, setFormData] = useState(clearData)

    const formDataPost = ()=>{
        const aptInfo = {
        id: lastId + 1,
        ownerName: formData.ownerName,
        petName: formData.petName,
        aptDate: formData.aptDate + " " + formData.aptTime,
        aptNotes: formData.aptNotes
        }
        onSendAppointment(aptInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    }


    return (
        <div className="p-2">
   
            {/* <div className="p-2 form-group mb-3 bg-primary rounded-2"> */}
            {/* </div> */}
            
            <button className="btn btn-primary w-100 text-start mb-2" onClick={()=>setToggleForm(!toggleForm)}> <BiCalendarPlus  className="mx-2"/> Add Appointment </button>
            {
                toggleForm &&
                
            <div  className="p-2 border border-1 rounded-2">
            
            <div className="form-group row mb-3">
                <label htmlFor="ownerName" className="col-sm-1 col-form-label
                " >Owner Name</label>
                <div className="col-sm-11">
                    <input type="text" name="ownerName" id="ownerName" className="form-control" onChange={(event => {setFormData({...formData, ownerName: event.target.value})})} value={formData.ownerName} required/>
                </div>
            </div>

            <div className="form-group row mb-3">

                <label htmlFor="petName" className="col-sm-1 col-form-label">Pet Name</label>
                <div className="col-sm-11">
                    <input type="text" name="petName" id="petName" className="form-control" onChange={(event => {setFormData({...formData, petName: event.target.value})})} value={formData.petName} required/>
                </div>
            </div>

            <div className="form-group row mb-3">

                <label htmlFor="aptDate" className="col-sm-1 col-form-label">Apt Date</label>
                <div className="col-sm-11">
                    <input type="date" name="aptDate" id="aptDate" className="form-control" onChange={(event => {setFormData({...formData, aptDate: event.target.value})})} value={formData.aptDate} required />
                </div>
            </div>

            <div className="form-group row mb-3">

                <label htmlFor="aptDate" className="col-sm-1 col-form-label">Apt Time</label>
                <div className="col-sm-11">
                    <input type="time" name="aptTime" id="aptTime" className="form-control" onChange={(event => {setFormData({...formData, aptTime: event.target.value})})} value={formData.aptTime} required/>
                </div>
            </div>
          
            <div className="form-group row mb-3">

                <label htmlFor="aptNotes" className="col-sm-1 col-form-label" >Appointment Notes</label>
                <div className="col-sm-11">
                    <textarea name="aptNotes" id="aptNotes" cols="30" rows="10" className="form-control" maxLength="200" onChange={(event => {setFormData({...formData, aptNotes: event.target.value})})} value={formData.aptNotes} required></textarea>
                </div>
            </div>

            <div className="form-group text-end">
                <button type="submit" onClick={formDataPost} className=" btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-danger mx-2">Clear</button>
            </div>
            </div>
 
            }
            
        </div>
    )
}



export default AddAppointment;