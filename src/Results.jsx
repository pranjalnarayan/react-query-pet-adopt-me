import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1> No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            key={pet.id}
            animal={pet.animal}
            name={pet.name}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
          ></Pet>
        ))
      )}
    </div>
  );
};

export default Results;
