export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-gray">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#"
          >
            Dashboard
          </a>
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute  rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search" />
              </span>
              <button
                className="bg-blue text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
              >
                Salir
              </button>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}
