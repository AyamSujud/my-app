import React from 'react';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';
import UpdatesList from './components/UpdatesList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App  bg-biru">
      <Navbar />
      <ImageContainer />
      <div className="mx-12 my-4 p-5 bg-biru">
        <h1 className="text-3xl text-white mb-4">Hi I'm Abdul Rasyid Nurhidayah</h1>
        <p className="text-lg text-white mb-4">Welcome to my portfolio!, I am a Front-end developer</p>
        <hr className="border-blue-900 my-4" />
      </div>
      <UpdatesList />
      <Footer />
    </div>
  );
}

export default App;

