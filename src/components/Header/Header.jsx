import LoginButton from './Login/Login';
import LogoutButton from './Logout/Logout';
import './header.css';

const Header = () => {
  return (
    <header>
        <div className='container'>
            <h1>DevGears Pro Test</h1>
            <div className='btns-wrap'>
                <LoginButton />
                <LogoutButton />
            </div>
      </div>
    </header>
  );
}

export default Header;
