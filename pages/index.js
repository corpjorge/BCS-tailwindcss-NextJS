import Admin from "../layouts/Admin";
import Table from "../components/Table/Table";

export default function Home() {
  return (
    <>
      <Admin>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <Table />
          </div>
          <div className="w-full mb-12 px-4">
            <Table />
          </div>
        </div>
      </Admin>
    </>
  );
}
