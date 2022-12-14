import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import './index.css';
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  },[])
  
  return (
    <div className="App">
      {
            isLoading && <div className='loading'>
              <div className='flex justify-center items-center h-full'>
              <img className='w-[250px]' src="./images/logo.png" alt="" />
              </div>
            </div>
        }
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
