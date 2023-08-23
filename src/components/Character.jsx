/* eslint-disable react/prop-types */
const Character = ({ character }) => {
  return (
    <article className="col-md-4 text-center p-4">
      <h2 className="text-danger">{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid rounded-pill"
      />
      <p className="fs-5">
        <b className="text-primary">Origen: </b> {character.origin.name}
      </p>
      <p className="fs-5">
        <b className="text-warning">Especie:</b> {character.species}
      </p>
      <p
        className={
          character.status === 'Alive'
            ? 'fs-5 text-success'
            : 'fs-5 text-danger'
        }
      >
        <b>Estado:</b> {character.status}
      </p>
    </article>
  );
};

export default Character;
