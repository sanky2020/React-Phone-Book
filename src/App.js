import React,{useState} from 'react';
import InformationTable from './components/InformationTable';
import PhoneBookForm from './components/PhoneBookForm';


function App() {
  const usersObj = [];

  const [users, setUsers] = useState(usersObj);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <section>
      <PhoneBookForm addUser={addUser} />
      <InformationTable users={users} />
    </section>
  );
}

export default App;
