const Navbar = () => {
    return (
      <div className="navbar bg-azulino shadow">
        <div className="flex-1">
        <a className="btn btn-ghost" style={{ fontSize: '29px' }}>Cripto & Co</a>
        </div>
  
        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>About</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
            <li><a>Buy criptos</a></li>
          </ul>
        </div>
  
        {/* Menú para móviles */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-azulino rounded-box w-52">
            <li><a>Inicio</a></li>
            <li><a>Acerca</a></li>
            <li><a>Servicios</a></li>
            <li><a>Contacto</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  