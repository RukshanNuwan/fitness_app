import Navbar from "@/components/navbar";
import {useState} from "react";

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
