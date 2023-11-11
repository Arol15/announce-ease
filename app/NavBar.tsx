import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="p-6 flex gap-2 border border-slate-600">
      <Link href="/">Home</Link>
      <Link href="/residents">Residents</Link>
      <Link href="/announcements">Announcements</Link>
    </nav>
  );
};

export default NavBar;
