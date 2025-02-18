import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSearch, BiUser, BiHeart, BiLock } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import CartSidebar from './CartSidebar';
import '../Styles/Navbar.css';


const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);
  const handleCartIconClick = () => setIsCartSidebarOpen(true);
  const handleCloseSidebar = () => setIsCartSidebarOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light " >
        <div className="container-fluid">
          <h1 className="d-lg-none">LARSSON & JENNINGS</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <FaBars />
          </button>
          <div
            className="offcanvas offcanvas-start d-lg-none"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <NavLink
                      to="*"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Watches
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="*"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Jewelry
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="*"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Gifts
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="/productpage"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Sale
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="row w-100 align-items-center justify-content-between">
              <div className="col-4">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter('Watches')}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}
                  >
                    <NavLink
                      to="*"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Watches
                    </NavLink>
                    {isDropdownVisible && (
                      <div className="dropdown" style={{ width: '600px' }}>
                        <div className="container-fluid">
                          <div className="row d-flex justify-content-evenly">
                            <div className="collections">
                              <strong>COLLECTIONS</strong>
                              <ul>
                                <li>All Watches</li>
                                <li>Summer Sale</li>
                                <li>Bestsellers</li>
                                <li>New In</li>
                                <li>Gold Watches</li>
                                <li>Mixed Gold Watches</li>
                                <li>Silver Watches</li>
                                <li>Rose Gold Watches</li>
                              </ul>
                            </div>
                            <div className="watches">
                              <strong>WATCHES</strong><br />
                              <a href="/productpage" className="view" style={{ fontSize: '16px', color: '#353535c5', textDecoration: 'underline', textAlign: 'left' }}>View All</a>
                              <div className="watch-grid">
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/files/Tribeca_MixedGold_3_38412f80-074b-47f7-be4d-c515998ee65a_200x.jpg?v=1721894112" alt="Tribeca NEW" />
                                  </Link>
                                  <p>Tribeca NEW</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/files/Boyfriend_Mini_Lumous_MixedGold_3_418ad2ae-4fca-4bb9-ac86-2afbadc5f62f_200x.jpg?v=1718875982" alt="Lumous" />
                                  </Link>
                                  <p>Lumous</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/files/Boyfriend_Mini_Elevate_mixedgold1copy_2_200x.png?v=1710314275" alt="Elevate" />
                                  </Link>
                                  <p>Elevate</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/products/BOYFRIENDGOLD_60cde078-280e-4a3b-84cd-708a20285b37_200x.png?v=1710314021" alt="Boyfriend" />
                                  </Link>
                                  <p>Boyfriend</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/products/jade_gold_green_200x.jpg?v=1710315035" alt="Jade" />
                                  </Link>
                                  <p>Jade</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/products/Norse_Link_Gold_Black_34mm_5f93bb68-8e01-488f-a651-8975dbb25cd7_200x.png?v=1710314818" alt="Norse" />
                                  </Link>
                                  <p>Norse</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/files/Vivid_Elevate_gold1_9d8dc120-2eb1-4025-abdb-b494b6b3cf28_200x.jpg?v=1710314274" alt="Vivid" />
                                  </Link>
                                  <p>Vivid</p>
                                </div>
                                <div className="watch-item">
                                  <Link to={`/productpage`} >
                                    <img src="https://larssonjennings.com/cdn/shop/files/LUGANOMILANESESILVER_200x.png?v=1722422781" alt="Lugano" />
                                  </Link>
                                  <p>Lugano</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter('Jewelry')}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}
                  >
                    <NavLink
                      to="*"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Jewelry
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter('Gifts')}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}
                  >
                    <NavLink
                      to="*"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Gifts
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter('Brand')}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}
                  >
                    <NavLink
                      to="/Brand"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Brand
                    </NavLink>
                  </li>
                  <li className="nav-item"
                  >
                    <NavLink
                      to="/productpage"
                      className="nav-link"
                      style={{ fontWeight: '100', fontSize: '15px', padding: '5px 10px' }}
                    >
                      Sale
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-5 text-center">
                <img src="src/assets/main logo.png" alt="Logo" className="navbar-logo" />
              </div>
              <div className="col-3 text-end">
                <div className="navbar-icons d-flex justify-content-end">
                  <NavLink className="navbar-link" to="/loginpage"><BiUser className="navbar-icon" /></NavLink>
                  <NavLink className="navbar-link" to="/whishlistpage"><BiHeart className="navbar-icon" /></NavLink>
                  <NavLink className="navbar-link" to="/search"><BiSearch className="navbar-icon" /></NavLink>
                  <span className="navbar-link" onClick={handleCartIconClick}><BiLock className="navbar-icon" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas for Cart Sidebar  */}
      <div className={`offcanvas offcanvas-end${isCartSidebarOpen ? ' show' : ''}`} tabIndex="-1" id="cartSidebar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Cart</h5>
          <button type="button" className="btn-close" onClick={handleCloseSidebar}></button>
        </div>
        <div className="offcanvas-body">
          <CartSidebar isOpen={isCartSidebarOpen} onClose={handleCloseSidebar} />
        </div>
      </div>


    </>
  );
};

export default Navbar;


