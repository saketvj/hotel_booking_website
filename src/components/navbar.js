
import './navbar.scss';

export default function Nav() {
  return (
    <div className="navBar">

        <img src="assets/find_stay.svg" alt="find stays"></img>   
        <img src="assets/logo.svg" alt="logo"></img>    
        <div className="favSection">
        <img src="assets/fav.svg" alt="find stays"></img> 
        <div className='user'>
        <div className="userAvatar">ID</div>
        <div className="userName">Ishan D.</div>
        </div>

        </div>       
      
    </div>
  )
}