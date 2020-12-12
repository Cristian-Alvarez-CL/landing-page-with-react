function Jumbotron(props) {
  return (
    <header className="jumbotron my-4">
      <h1 className="display-3">{props.titulo}</h1>
      <p className="lead">{props.contenido}</p>
      <a href="..." className="btn btn-primary btn-lg">
        {props.nameBtn}
      </a>
    </header>
  );
}

export default Jumbotron;
