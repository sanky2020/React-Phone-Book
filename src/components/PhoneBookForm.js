import React, {useState} from 'react'

function PhoneBookForm(props) {
    const initContact = {
        id: null,
        userFirstname: "Enter First Name..",
        userLastname: "Enter Last Name..",
        userPhone: "Enter Phone number..",
      };
    
      const [userState, setUserState] = useState(initContact);
    
      const handleUserChange = (e) => {
        setUserState({
          ...userState,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
        props.addUser(userState);
        setUserState(initContact);
      };
    
      return (
        <form onSubmit={handleSubmit} className='container'>
          <label>First name:</label>
          <br />
          <input className="inputs userFirstname" name="userFirstname" type="text" value={userState.userFirstname} onChange={handleUserChange} />
          <br />
          <label>Last name:</label>
          <br />
          <input className="inputs userLastname" name="userLastname" type="text" value={userState.userLastname} onChange={handleUserChange} />
          <br />
          <label>Phone:</label>
          <br />
          <input className="inputs userPhone" name="userPhone" type="text" value={userState.userPhone} onChange={handleUserChange} />
          <br />
          <input className="submitBtn submitButton" type="submit" value="Add User" />
        </form>
      );
}

export default PhoneBookForm