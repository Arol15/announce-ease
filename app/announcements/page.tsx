import Link from "next/link";

const AnnouncementsPage = () => {
  return (
    <>
      <button>
        <Link href="/announcements/new">New Announcement</Link>
      </button>
      <div>Announcements List</div>
    </>
  );
};

export default AnnouncementsPage;
