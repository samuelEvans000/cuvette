

import './App.css'
import Header from './components/Header/Header'
import Row1 from './components/Row1/Row1'
import SideBar from './components/SideBar/SideBar'
// import Row2 from './components/Row2/Row2'

function App() {
 

  return (
    <>
      <div>
       <Header/>
       <div className='content'>
       <SideBar/>
       <Row1/>
       
       </div>
       
       
      </div>
    
     
    </>
  )
}

export default App
