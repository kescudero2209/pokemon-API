import { NavLink } from 'react-router-dom'
import pokebola from '../img/pokebola.png'
import './NavBar.css';

export default function Navbar () {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <div className="navbar">
    <img id="logo" src={pokebola} alt="logo de pokebola de Pokemon"/>
    <div className="linksNavbar">
      <NavLink className={setActiveClass} end to='/'>
        Home
      </NavLink>
      {' - '}
      <NavLink className={setActiveClass} to='/pokemon'>
        Pokemones
      </NavLink>
    </div>
    </div>
  )
}