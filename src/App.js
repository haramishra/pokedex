import React from 'react';
import Card from './components/Card'
import './App.scss';

const arr = [1,2,3,4,5,6,7,8,9,10]
class App extends React.Component {
  render() {
    return (
      <div className="pokemon-cards">
        {
          arr.map(item => <Card key={item}/>)
        }
      </div>
    )
  }
}

export default App;
