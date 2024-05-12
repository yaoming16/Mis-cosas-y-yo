import NavBar from "./NavBar";
import "animate.css";

export default function AboutPage() {
  return (
    <div className="bg-custom-cyan text-custom-black">
      <NavBar />
      <div className="flex flex-col p-5 text-lg md:text-2xl lg:text-3xl">
        <div className="m-auto max-w-[800px]">
          <h1 className="text-center text-3xl md:text-6xl font-bold animate__animated animate__bounceIn animate__slow">
            Mis cosas y yo
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-center mt-3 animate__animated animate__fadeInLeft animate__slow animate__delay-2s">
            Bienvenidos!
          </h2>
          <p className="mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            En esta página podrán encontrar una recopilación de muchas de las
            cosas que me gustan (Libros, juegos, etc) y una pequeña reseña o
            comentario de estos. El objetivo es tener un lugar donde ir
            guardando todas esas cosas y compartirlas con los demás.
          </p>
          <h2 className="font-bold text-center mt-3 text-2xl md:text-4xl animate__animated animate__fadeInRight animate__slow animate__delay-2s">
            Guía
          </h2>
          <p className="mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            En la seccion de{" "}
            <a
              className="font-bold text-custom-dark-blue hover:text-custom-red "
              href="/search/index.html"
            >
              Busqueda
            </a>{" "}
            van a poder acceder al buscador. Dentro de la misma tiene que
            escribir en la barra de busqueda una palabra clave (nombre del libro
            o autor por ejemplo) para iniciar la busqueda. También pueden
            utilizar alguna de las otras opciones de filtrado. Si no se aplica
            ningún filtro se va a cargar el listado de todos los libros.
          </p>
          <p className=" mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            Pueden aplicar filtros para ver mis juegos favoritos o libros
            pendientes por ejemplo
          </p>
          <p className="mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            Si así lo deseean también pueden pedir una recomendación al azar que
            cumpla con los parametros que ustedes seleccionen.
          </p>
          <a
            href="/search/index.html"
            className="flex m-auto mt-5 md:w-3/4 text-white bg-custom-purple hover:bg-custom-dark-blue  font-medium rounded-lg text-sm px-5 py-2.5
            animate__animated animate__fadeIn animate__slow animate__delay-4s
      "
          >
            <span className="text-center w-full">Acceder al buscador</span>
          </a>
        </div>
      </div>
    </div>
  );
}
