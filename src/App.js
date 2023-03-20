import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Company from './components/Company';


const App = () => {
  const [company, setCompany] = useState("default")
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar setCompany={setCompany}/>
      <Company company={company}/>
    </div>
  );
}

export default App;
