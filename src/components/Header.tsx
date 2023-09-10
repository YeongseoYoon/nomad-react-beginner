import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-16 bg-white shadow-md">
      <div className="container flex itmes-center">
        <Link to="/" className="my-4 ml-6 text-2xl font-semibold">
          Marvelous🚀
        </Link>
      </div>
    </header>
  );
};

export default Header;
