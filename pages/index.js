import Admin from "../layouts/Admin";
import Table from "../components/Table/Table";
import Button from "../components/Buttons/button";

export default function Home() {
  let style = 'success';
  // let style = 'primary';
  return (
    <>
      <Admin>
        <div className="md:pt-32 pb-15 pt-12 md:ml-52">
          <div className="w-full mb-12 px-4">
            <Table />
            <Button type={style} text={'Cerrar'}/>
          </div>
          <div className="w-full mb-12 px-4">
            <Table />
          </div>
        </div>
      </Admin>
    </>
  );
}
