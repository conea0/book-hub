import React from 'react';
import Calendar from './calender';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>週間カレンダー</h1>
      <div className="calendar-container">
        <div className="calendar">
        <Calendar year={2023}month={9}/>
        </div>
      </div>
    </div>
  );
};

export default App;






