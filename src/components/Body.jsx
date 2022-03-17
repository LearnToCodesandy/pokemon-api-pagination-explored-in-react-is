const Body = ({ pokemons, handleNext, handlePrev, id }) => {
  return (
    <div className="container-fluid my-3 position-relative">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        Page no : {id}
      </span>
      <div className="container-fluid  text-dark p-3 ">
        {pokemons.map((pokemon) => (
          <ul className="list-group" key={Math.random() * 1000000000}>
            <li className="list-group-item">{pokemon.name}</li>
          </ul>
        ))}
      </div>
      <div className="btn-group">
        <button
          className="btn btn-success"
          onClick={() => {
            handlePrev();
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Body;
