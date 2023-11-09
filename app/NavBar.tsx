import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="p-6 text-center border border-slate-600">
      <Link href="/">Home</Link>
    </nav>
  );
};

export default NavBar;
