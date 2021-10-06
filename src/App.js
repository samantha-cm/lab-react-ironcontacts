import contacts from "./contacts.json";
import "./App.css";
import React, { useState } from "react";

function App() {
  //console.log(contacts)
  const [contactArr, setContact] = useState(contacts.slice(0, 5));

  function randomContact() {
    let randomContact = Math.floor(Math.random() * (contacts.length - 0)) + 0;
    let finalContact = contacts[randomContact];

    if (!contactArr.includes(finalContact)) {
      setContact([...contactArr, finalContact]);
    }
  }
  function nameContact() {
    let nameContact = contactArr.sort((a, b) => a.name.localeCompare(b.name));
    setContact([...nameContact]);
  }

  function popularityContact() {
    let popularityContact = contactArr.sort(
      (a, b) => b.popularity - a.popularity
    );
    console.log(popularityContact);
    setContact([...popularityContact]);
  }

  function deleteContact(id) {
    const deleteArray = contactArr.filter((contact) => contact.id !== id);
    setContact([...deleteArray]);
  }

  //aquí empieza JSX
  return (
    <div className="App">
      <button onClick={randomContact}>Add random contact</button>
      {contactArr.length !== 0 && (
        <button onClick={nameContact}>Sort by name</button>
      )}
      {contactArr.length !== 0 && (
        <button onClick={popularityContact}>Sort by popularity</button>
      )}

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contactArr.length !== 0 ? (
          contactArr.map((contact) => {
            return (
              <tbody key={contact.id}>
                <tr>
                  <td>
                    <img
                      style={{ width: "100px" }}
                      src={contact.pictureUrl}
                      alt={contact.id}
                    ></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
                      borrar
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <tbody>
            <tr>
              <td>
                <h1> No hay contactos</h1>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
