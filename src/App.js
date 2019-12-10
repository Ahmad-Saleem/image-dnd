import React, {useState} from 'react';

function App() {


  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <div className="App" style={{padding: 50}}>
      <div style={{
        width: 430, height: 300, border: '5px solid #e3e3e3', margin: 'auto',
        overflow: 'hidden',
        position: 'relative',
      }}>

      <img id='myImg' src='/bg.jpg' style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
      }} alt='' onDrag={e => {
        let x = e.pageX;
        if(x > 0) setLeft(430 - x);
        console.log(x)
      }} 
      // onDragLeave={
      //   e => {
      //     let x = e.pageX;
      //     //setLeft(430 - x);
      //     console.log(x)
      //   }
      // }
      onLoad={e => {
        console.log(e.target.width, e.target.height);
        setLeft((-e.target.width/2) + 215);
        setTop((-e.target.height/2) + 150);
      }}
      />

      </div>
    </div>
  );
}

export default App;
