import React from 'react';


const dogs = [
    { name: 'Whiskey', age: 5, breed: 'Golden Retriever' },
    { name: 'Hazel', age: 3, breed: 'Labrador Retriever' },
    { name: 'Buddy', age: 7, breed: 'Beagle' },
  ];

  function DogList() {
    return (
      <div>
        <h2>Dogs</h2>
        <ul>
          {dogs.map((dog, index) => (
            <li key={index}>
              <a href={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function DogDetails({ match }) {
    const { dogName } = match.params;
    const dog = dogs.find((dog) => dog.name.toLowerCase() === dogName.toLowerCase());
  
    if (!dog) {
      return <Redirect to="/dogs" />;
    }
  
    return (
      <div>
        <h2>{dog.name}</h2>
        <p>Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
      </div>
    );
  }

  function App() {
    return (
      <Router>
        <div>
          <Nav dogs={dogs} />
          <Switch>
            <Route exact path="/dogs" component={DogList} />
            <Route exact path="/dogs/:dogName" component={DogDetails} />
            <Redirect to="/dogs" />
          </Switch>
        </div>
      </Router>
    );
  }

  function Nav({ dogs }) {
    return (
      <nav>
        <ul>
          {dogs.map((dog, index) => (
            <li key={index}>
              <a href={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default App;