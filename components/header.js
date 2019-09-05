import Logo from '../components/Logo';
import Menu from '../components/Menu';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Menu />
    <style jsx>{`
      .header-wrapper {
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;

        overflow: hidden;
        position: fixed; /* Set the navbar to fixed position */
        top: -10; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
      }

      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Header;