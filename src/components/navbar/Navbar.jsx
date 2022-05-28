import './navbar.scss';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>KID</span>
            <Notifications className="icon" />
            <img
              src="https://i.pinimg.com/originals/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg"
              alt="Profile"
            />
            <div className="profile">
              <ArrowDropDown className="icon" onClick={() => setShowBlock(!showBlock)} />
              {showBlock ? (
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
