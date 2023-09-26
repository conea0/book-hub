import React from 'react';
import Calendar from './calendar';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>週間カレンダー</h1>
      <div className="calendar-container">
        <div className="calendar">
        <Calendar />
        </div>
      </div>
    </div>
  );
};

export default App;






