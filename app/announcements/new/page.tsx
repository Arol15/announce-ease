"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button } from "@/components/ui/button";

const newAnnouncementPage = () => {
  return (
    <div className="flex flex-col p-8 w-1/2 mx-auto space-y-3">
      <h1>Create New Announcement: </h1>
      <input placeholder="Header" />
      <SimpleMDE placeholder="Add your text" />
      <Button>Submit</Button>
    </div>
  );
};

export default newAnnouncementPage;
