import NavBar from "./NavBar";
import Footer from "./Footer";
import "animate.css";

export default function AboutPage() {
  return (
    <div className="bg-custom-cyan text-custom-black">
      <NavBar />
      <div className="flex flex-col p-5 ">
        <div className="md:text-lg m-auto max-w-[800px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-center  animate__animated animate__bounceIn animate__slow">
            Mis cosas y yo
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-center mt-3 animate__animated animate__fadeInLeft animate__slow animate__delay-2s">
            Bienvenidos!
          </h2>
          <p className=" mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            En esta página podrán encontrar una recopilación de muchas de las
            cosas que me gustan (Libros, juegos, obras de teatro, etc) que he
            experimentado a lo largo de los años. Por ahora solo algunos cuentan
            con una pequeña reseña o comentario personal pero en el futuro la
            idea es que todos tengan uno. El objetivo es tener un lugar donde ir
            recopilando las cosas que me gustan y poder compartirlas con los
            demás.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mt-3   animate__animated animate__fadeInRight animate__slow animate__delay-2s">
            Guía
          </h2>
          <p className="mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            En la seccion de{" "}
            <a
              className="font-bold text-custom-dark-blue hover:text-custom-red transition"
              href="/Mis-cosas-y-yo/search/index.html"
            >
              Busqueda
            </a>{" "}
            van a poder acceder al buscador. Aquí pueden utilizar diversas
            opciones de filtrado, como la barra de búsqueda, el filtro por
            puntuación, por género o seleccionar para ver otra categoría. Si no
            aplican ningún filtro, por defecto se cargará el listado de todos
            los libros.
          </p>
          <p className=" mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            También pueden aplicar filtros para ver mis juegos favoritos o
            libros pendientes, por ejemplo.
          </p>
          <p className="mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            Si lo desean, pueden solicitar una recomendación al azar que cumpla
            con los parámetros que seleccionen.
          </p>
          <p className="mt-2 animate__animated animate__fadeIn animate__slow animate__delay-4s">
            Además, pueden entrar a la sección de{" "}
            <a
              className="font-bold text-custom-dark-blue hover:text-custom-red transition"
              href="/Mis-cosas-y-yo/MusicPage/index.html"
            >
              Música
            </a>{" "}
            para ver mis estadísticas de Spotify, como mis 50 canciones más
            escuchadas en los últimos 6 meses.
          </p>
          <a
            href="/Mis-cosas-y-yo/search/index.html"
            className="transition flex m-auto mt-5 md:w-3/4 text-white bg-custom-purple hover:bg-custom-dark-blue  font-medium rounded-lg text-sm px-5 py-2.5
            animate__animated animate__fadeIn animate__slow animate__delay-4s
      "
          >
            <span className="text-center w-full">Acceder al buscador</span>
          </a>
        </div>
      </div>
      <Footer className="animate__animated animate__fadeIn animate__slow animate__delay-4s"></Footer>
    </div>
  );
}
