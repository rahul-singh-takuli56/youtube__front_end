import React from 'react';
import Video from './components/Video';
import './App.css';
import videos from './data/data'
function App() {

  return (
    <div className='App'>
      <div>Videos</div>
      {
        // it is iterator
        videos.map(it => <Video
          key={it.id} // for unique id's
          verified={it.verified}
          title={it.title}
          views={it.views}
          time={it.time}
          channel={it.channel}
          id={it.id}
        />)
      }
      <video />
    </div>
  );
}

export default App;
