import React from 'react';
import Video from './components/Video';
import './App.css';

function App() {
  let obj = {
    title: 'React Youtube',
    views: '90K',
    time: '1 year ago',
    channel: 'JS Tutorial',
    verified: true,
  };

  return (
    <div className='App'>
      <Video {...obj}></Video>
      <Video
        verified={false} // conditional rendering 
        title="React JS tutorial"
        views="10k"
        time="1 year ago"
        channel="React youtube"
      />
      <Video
        title="Node JS tutorial"
        views="40k"
        time="3 years ago"
        channel="Node youtube"
        verified={true}
      />
    </div>
  );
}

export default App;
