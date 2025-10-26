import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-green-900 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            🎓 Student Management System
          </h1>

          {/* Desktop button */}
          <div className="hidden md:block">
            <NavLink
              to="/registration"
              className="px-5 py-2 bg-white text-green-900 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all"
            >
              + Create Student
            </NavLink>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <NavLink
              to="/registration"
              className="text-white bg-green-700 px-3 py-2 rounded-md hover:bg-green-600 transition"
            >
              +
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
