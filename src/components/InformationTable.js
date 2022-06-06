import React from 'react'

function InformationTable(props) {
    const sortedContacts = props.users.sort((a, b) => a.userLastname.localeCompare(b.userLastname));

    const display =
      sortedContacts.length > 0 ? (
        sortedContacts.map((user, index) => (
          <tr key={index}>
            <td className='tableCell'>{user.userFirstname}</td>
            <td className='tableCell'>{user.userLastname}</td>
            <td className='tableCell'>{user.userPhone}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
      );
  
    return (
      <table className="table informationTable">
        <thead>
          <tr>
            <th className='tableCell'>First name</th>
            <th className='tableCell'>Last name</th>
            <th className='tableCell'>Phone</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>
    );
}

export default InformationTable