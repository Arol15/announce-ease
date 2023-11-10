import Link from "next/link";

const ResidentsPage = () => {
  return (
    <>
      <div>List of Residents</div>
      <button>
        <Link href="/residents/new">Add resident</Link>
      </button>
    </>
  );
};

export default ResidentsPage;
