import clsx from "clsx";
import { ChevronLeftIcon, PencilAltIcon, NewspaperIcon } from "@mfe/styleguide";

export const Sidebar = ({ isOpen = false, onToggle }) => {
  return (
    <aside
      className={clsx(
        "top-0 bottom-0 h-screen border-r bg-white transition-[width]",
        (isOpen && "w-64") || "w-0 overflow-hidden border-r-0"
      )}
    >
      <div className="flex border-b h-24 items-center px-4 justify-between">
        <button
          className="hover:bg-gray-100 rounded-md p-4 ml-auto"
          onClick={onToggle}
        >
          <ChevronLeftIcon />
        </button>
      </div>
      <div className="flex flex-col">
        <ul>
          <li>
            <a
              href="/articles/new"
              className="flex hover:bg-gray-100 rounded-md p-4"
            >
              <PencilAltIcon className="mr-4" />
              <span>New Article</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex hover:bg-gray-100 rounded-md p-4">
              <NewspaperIcon className="mr-4" />
              <span>Your articles</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
