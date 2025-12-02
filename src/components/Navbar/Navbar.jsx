import React from 'react';
import './Navbar.css';
import { 
  AiFillHome, 
  AiOutlineTool, 
  AiOutlineCode, 
  AiOutlineFolderOpen, 
  AiOutlineUser, 
  AiOutlineMail 
} from 'react-icons/ai'; 


// El componente NavItem sigue siendo el mismo. Ahora 'icon' recibirá un COMPONENTE de React.
const NavItem = ({ icon, text }) => (
  <li className="nav-item">
    {/* El enlace usa un # para saltar a una sección de tu página, por ejemplo, #home, #contact */}
    <a href={`#${text.toLowerCase()}`} className="nav-link">
      {/* 2. El ícono se renderiza directamente aquí, es un componente SVG */}
      <span className="nav-icon">{icon}</span> 
      <span className="nav-text">{text}</span>
    </a>
  </li>
);

const Navbar = () => {

    // 3. Reemplazar los strings de emojis por los componentes de ícono importados
    const navItems = [
        { icon: <AiFillHome />, text: 'Home' },
        { icon: <AiOutlineTool />, text: 'Experience' },
        { icon: <AiOutlineCode />, text: 'Tech' },
        { icon: <AiOutlineFolderOpen />, text: 'Projects' },
        { icon: <AiOutlineUser />, text: 'About' },
        { icon: <AiOutlineMail />, text: 'Contact' },
    ]


    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                {navItems.map((item) => (
                    <NavItem key={item.text} icon={item.icon} text={item.text} />
                ))}
            </ul>
        </nav>
    )

}
export default Navbar