export default function Footer({ className }) {
  return (
    <footer className={"flex mt-10 mb-10 p-5 " + className}>
      <div className="m-auto text-center flex flex-col">
        <p className="text-xl md:text-2xl">
          Creado por <span className="italic font-bold">Pablo Perez</span>
        </p>

        <a
          href="https://yaoming16.github.io/"
          target="_blank"
          className="font-bold text-custom-dark-blue hover:text-custom-red transition text-lg md:text-xl"
        >
          Página Personal
        </a>
        <a
          href="https://github.com/yaoming16/Mis-cosas-y-yo"
          target="_blank"
          className="font-bold text-custom-dark-blue hover:text-custom-red transition text-lg md:text-xl"
        >
          Repositorio del proyecto
        </a>

        <div className="flex flex-col">
          <p className="mb-2 mt-2 text-lg md:text-xl">
            Pueden contactarme o descubrir otro proyectos a través de LinkedIn o
            GitHub:{" "}
          </p>
          <div className="flex flex-row justify-around">
            <a
              href="https://github.com/yaoming16"
              target="_blank"
              className="hover:scale-125 duration-300"
            >
              <i className="devicon-github-original text-custom-purple text-[max(28px,7vw)] md:text-6xl hover:text-custom-dark-blue"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-javier-perez-gimenez/"
              target="_blank"
              className="hover:scale-125 duration-300"
            >
              <i className="devicon-linkedin-plain text-custom-purple text-[max(28px,7vw)] md:text-6xl hover:text-custom-dark-blue"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
