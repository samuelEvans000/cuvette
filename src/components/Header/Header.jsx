import logo from '../../assets/logo.jpg'
import profile from '../../assets/profile.jpeg'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      
        <div>
        <img src={logo}></img>
        </div>
        
        <div >
            <button className='profile'>
            <img className='profile-img' src={profile}></img>
             Vincent Samuel
            </button>
        </div>
      
      
    </div>
  )
}

export default Header
