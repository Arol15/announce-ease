import Link from "next/link";
import { Button } from "@/components/ui/button";

const AnnouncementsPage = () => {
  return (
    <div className="p-8">
      <Button>
        <Link href="/announcements/new">New Announcement</Link>
      </Button>
      <div>Announcements List</div>
    </div>
  );
};

export default AnnouncementsPage;
