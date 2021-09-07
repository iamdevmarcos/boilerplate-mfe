import { MenuIcon, UserCircle } from "@mfe/styleguide";
import { MainNav } from "./MainNav";

export const Navbar = ({ onOpenSidebar, user }) => {
  return (
    <header className="flex justify-between items-center px-8 h-24 border-b border-indigo-800 bg-indigo-700">
      <button
        className="text-white hover:bg-indigo-600 rounded-md p-4 mr-4"
        onClick={onOpenSidebar}
      >
        <MenuIcon />
      </button>
      <div className="flex flex-1 items-center justify-center lg:justify-start">
        <a href="/" className="uppercase text-white ">
          Typer
        </a>
      </div>
      {<MainNav className="hidden mr-1 lg:block" user={user} />}
      <a
        href="/dashboard"
        // onClick={onOpen}
        // ref={ref}
        className="text-white hover:bg-indigo-600 rounded-md p-4"
      >
        <UserCircle />
      </a>
      {/*<Popover anchorEl={anchorEl} isOpen={isOpen} onClose={onClose}>
        <div className="p-1 flex flex-col items-stretch">
          <a
            href="#"
            className="hover:bg-gray-100 text-sm rounded-md p-4 uppercase flex space-x-2"
          >
            <AdjustmentsIcon className="fill-gray-400" />
            <span>My Dashboard</span>
          </a>
          <a
            href="#"
            className=" hover:bg-gray-100 text-sm rounded-md p-4 uppercase flex space-x-2"
          >
            <LogoutIcon className="fill-gray-400" /> <span>Sign Out</span>
          </a>
        </div>
      </Popover>*/}
    </header>
  );
};
