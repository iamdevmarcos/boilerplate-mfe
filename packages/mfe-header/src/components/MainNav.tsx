import clsx from "clsx";

export const MainNav = ({ user, className }) => {
  return (
    <nav className={clsx("space-x-1", className)}>
      {!user && (
        <>
          <a
            href="/signin"
            className="text-white hover:bg-indigo-600 text-sm uppercase rounded-md inline-flex items-center justify-center py-4 px-8"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="text-white hover:bg-indigo-600 text-sm uppercase rounded-md inline-flex items-center justify-center py-4 px-8"
          >
            Sign Up
          </a>
        </>
      )}
    </nav>
  );
};
