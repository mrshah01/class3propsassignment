import React from 'react';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
     <Dinner dishName='chicken karhai' sweetDish='kheer'/>
     <Dinner dishName='chicken handi' sweetDish='suji halwa'/>
     <Dinner dishName='chicken biryani' sweetDish='gajar halwa'/>
    </div>
  );
}

export default App;
