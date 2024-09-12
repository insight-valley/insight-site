export default function Features() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">A Dura Verdade Sobre Tecnologia</h2>
            <p className="text-xl text-gray-400">
              Fato inegável: A maioria das empresas está desperdiçando fortunas
              com tecnologia mal aplicada.
            </p>
          </div>

          {/* Items */}
          <div
            className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-pink-400 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="text-purple-300 stroke-current"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="text-purple-300 stroke-current"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="text-purple-100 stroke-current"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="mb-2 h4">Comunicação dificil</h4>
              <p className="text-lg text-center text-gray-400">
                Nós sabemos que conversar sobre tecnologia pode se tornar um
                assunto bem complicado e até pouco interessante, mas aqui nosso
                interesse é sempre no produto, ou seja, amamos tecnologia, mas
                amamos ainda mais a aplicabilidade dela.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-pink-400 fill-current"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="text-purple-100 stroke-current"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="text-purple-300 stroke-current"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="mb-2 h4">Poucos e Bons Clientes</h4>
              <p className="text-lg text-center text-gray-400">
                Nossa visão é de termos poucos e bons clientes. Sabemos que a
                escala tras desafios que muitas vezes comprometem a qualidade da
                entrega. Quem está conosco, tem o nossa atenção e cuidado.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-pink-400 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="text-purple-300 stroke-current"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    className="text-purple-100 stroke-current"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    className="text-purple-100 stroke-current"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 className="mb-2 h4">Qualidade é Inegociavel</h4>
              <p className="text-lg text-center text-gray-400">
                Podemos adaptar, tempo, valor, possibilidades. Mas a qualidade
                para nós é sempre a prioridade
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            ></div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-pink-400 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(22 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="text-purple-100 stroke-current"
                    d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                  />
                  <circle
                    className="text-purple-300 stroke-current"
                    cx="13"
                    cy="9"
                    r="3"
                  />
                </g>
              </svg>
              <h4 className="mb-2 text-center h4">
                Tecnologia é o meio, mas não o fim
              </h4>
              <p className="text-lg text-center text-gray-400">
                Temos a visão clara de que a tecnologia é somente um meio para
                melhorar a vida das pessoas. Isso sempre nos lembra de nunca nos
                apegarmos a ferramentas e tecnologias, sempre estamos em busca
                de coisas novas e melhores.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
