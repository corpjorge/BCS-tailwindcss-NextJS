import CardStats from "../Cards/CardStats";

export default function Button({ type, text }) {
  return (
    <>
      <button
        className={
          "text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-40 ease-linear transition-all duration-150 bg-" +
          type
        }
      >
        {text}
      </button>
    </>
  );
}

CardStats.defaultProps = {
  type: "bg-primary",
  text: "Star",
};
