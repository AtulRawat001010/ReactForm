import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comment:"", isVisible:true, mode:"", favCar:""})
  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }

  // function changeLastHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)

  // }

  
  
  function changeHandler(event) {
    const {name, value, checked, type} = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submit Ho Gaya");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='First Name' onChange={changeHandler} name="firstName" value={formData.firstName}/>

        <input type="text" placeholder='Last Name' onChange={changeHandler} name="lastName" value={formData.lastName}/>

        <input type="text" placeholder='Email' onChange={changeHandler} name="email" value={formData.email}/>

        <br />
        <br />
        <br />

        <textarea name="comment" placeholder='Enter Comment Here' id="" cols="20" rows="1" onChange={changeHandler} value = {formData.comment} />

        <br />
        <br />

        <input name="isVisible" type='checkbox' id='isVisible' onChange={changeHandler} checked={formData.isVisible}/>
        <label htmlFor="isVisible">Am I visible</label>

        <br />
        <br />
        <br />

        <input name='mode' type='radio' onChange={changeHandler} value='online-mode' id='online-mode' checked={formData.mode==="online-mode"}/>
        <label htmlFor="online-mode">Online Mode</label>

        <input name='mode' type='radio' onChange={changeHandler} value='offline-mode' id='offline-mode' checked={formData.mode==="offline-mode"} />
        <label htmlFor="offline-mode">Offline Mode</label>

        <br />
        <br />
        <br />

        <label htmlFor="favCar">Your Favorite Car? </label>

        <select name="favCar" id="favCar" onChange={changeHandler} value={formData.favCar}>
          <option value="thar">thar</option>
          <option value="scorpio">scorpio</option>
          <option value="jeep">jeep</option>
        </select>

        <br />
        <br />
        <br />

        {/* <input type="submit" /> */}

        <button>submit</button>

      </form>
    </div>
  )
}

export default App