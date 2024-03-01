import { NavLink } from "react-router-dom";
import { LinksInforms } from "./const";

const Header = () => {
  return (
    <div className="w-full h-4rem flex justify-center items-center">
      {LinksInforms.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "ml-3 text-red-400" : "ml-3"
          }
          key={link.link}
          to={link.link}
          children={link.title}
        />
      ))}
    </div>
  );
};

export default Header;
