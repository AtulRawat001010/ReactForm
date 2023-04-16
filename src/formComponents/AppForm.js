import React, { useState } from 'react'
import './AppForm.css'

const AppForm = () => {
    
    const [formData, setFormData] = useState({
        firstName:"", lastName:"", email:"", country:"INDIA", 
        streeAddress:"", city:"", state:"", zip:"", comments:false, candidates:false, offers:false, pushNotification:""
    });

    function changeHandler(event) {
        const {name, value, type, checked} = event.target;

        setFormData((prevData)=> ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value 
        }))
    }

    function submitHandler(params) {
        params.preventDefault();
        console.log("data");
        console.log(formData);
    }


  return (
    <div className="app">
        <form onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name </label>
            <br />
            <input id="firstName" type="text" name="firstName" placeholder="Atul" value={formData.firstName} onChange={changeHandler} />

            <br />
            <br />

            <label htmlFor="lastName">Last Name </label>
            <br />
            <input id="lastName" type="text" name="lastName" placeholder="Rawat" value={formData.lastName} onChange={changeHandler} />

            <br />
            <br />

            <label htmlFor="email">Email Address </label>
            <br />
            <input id="email" type="text" name="email" placeholder="atulrawat@gmail.com" value={formData.email} onChange={changeHandler} />

            <br />
            <br />

            <label htmlFor="country">Country</label>
            <br />
            <select name="country" id="country" value={formData.country} onChange={changeHandler}>
                <option value="USA">USA</option>
                <option value="CANADA">CANADA</option>
                <option value="INDIA">INDIA</option>
            </select>

            <br />
            <br />

            <label htmlFor="stree-address">Street Address </label>
            <br />
            <input id="stree-address" type="text" name="streeAddress" placeholder="1234 Main Road" value={formData.streeAddress} onChange={changeHandler} />

            <br />
            <br />
            <label htmlFor="city">City </label>
            <br />
            <input id="city" type="text" name="city" placeholder="Noida" value={formData.city} onChange={changeHandler} />

            <br />
            <br />

            <label htmlFor="state">State </label>
            <br />
            <input id="state" type="text" name="state" placeholder="Uttarpradesh" value={formData.state} onChange={changeHandler} />

            <br />
            <br />

            <label htmlFor="zip">Zip/Postal </label>
            <br />
            <input id="zip" type="text" name="zip" placeholder="249012" value={formData.zip} onChange={changeHandler} />

            <br />
            <br />

            <fieldset>
                <legend>By Email</legend>

                <div className='checkboxDiv1'>
                    <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={changeHandler}/>
                    <label htmlFor="comments">Comments</label>
                    <ul><li>Get notified for emails</li></ul>
                    <br />
                </div>
                <div className='checkboxDiv2'>
                    <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler}/>
                    <label htmlFor="candidates">Candidates</label>
                    <ul><li>Get notified for emails</li></ul>
                    <br />
                </div>
                <div>
                    <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler}/>
                    <label htmlFor="offers">Offers</label>
                    <ul><li>Get notified for emails</li></ul>
                    <br />
                </div>

            </fieldset>

            <fieldset>
                <legend>Push Notification</legend>
                <p>These are delivered via sms</p>

                <input id="pushEverything" name="pushNotification" type="radio" value="pushEverything" onChange={changeHandler}/>
                <label htmlFor="pushEverything">Everything</label>
                <br />

                <input id="asEmail" name="pushNotification" type="radio" value="asEmail" onChange={changeHandler}/>
                <label htmlFor="asEmail">As Email</label>
                <br />

                <input id="nothing" name="pushNotification" type="radio" value="nothing" onChange={changeHandler}/>
                <label htmlFor="nothing">Push Nothing</label>
            </fieldset>

            <button>Save</button>

        </form>
    </div>
  )
}

export default AppForm