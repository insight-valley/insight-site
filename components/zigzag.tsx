import Image from "next/image";

import SocialMedia from "@/public/images/SocialTools.png";
import CloudTools from "@/public/images/CloudTools.png";
import AITools from "@/public/images/AITools.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm font-semibold text-green-600 bg-green-200 rounded-full">
              Por que existimos
            </div>
            <h1 className="mb-4 h2">Para quem fazemos isso?</h1>
            <p className="text-xl text-gray-400">
              Se você é um empreendedor ou info-produtor que quer maximizar a
              monetização dos seus produtos, nós somos a escolha certa. Ajudamos
              você a economizar tempo e a adotar as tecnologias que realmente
              fazem a diferença para construir uma experiência memorável para
              seus clientes.
            </p>
          </div>
          <div className="max-w-xs mx-auto mb-16 sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                className="w-full mb-4 text-white bg-pink-200 btn hover:bg-pink-100 sm:w-auto sm:mb-0"
                href="#0"
              >
                Estou pronto para o próximo máximo
              </a>
            </div>
          </div>
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={SocialMedia}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl text-pink-400 font-architects-daughter">
                    Criação de conteúdo
                  </div>
                  <h3 className="mb-3 h3">
                    Compartilhamos conhecimento, sempre!
                  </h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Tudo que sabemos foi transmitido diretamente ou
                    indiretamente por outras pessoas, por isso temos o
                    compromisso de sempre compartilhar conhecimento para outras
                    pessoas.
                  </p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Talks & Treinamentos</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Participação em Eventos</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Produção de Conteúdo Online (Youtube e Instagram)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={CloudTools}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="mb-2 text-xl text-pink-400 font-architects-daughter">
                    Cloud Computing & Site Reliability Engineering
                  </div>
                  <h3 className="mb-3 h3">
                    Cloud/DevOps e eficiência operacional
                  </h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Sabemos que muitas empresas querem e usam computação em
                    nuvem. Mas sabemos com nossa experiência que essa é uma
                    tarefa complexa e traz consigo grandes custos.
                  </p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Resiliência e Observabilidade</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>FinOps, fazendo mais, com menos</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        As ferramentas certas, para os problemas certos
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={AITools}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl text-pink-400 font-architects-daughter">
                    Dados é o maior valor das empresas
                  </div>
                  <h3 className="mb-3 h3">
                    Inteligência Artificial, aplicada a realidade
                  </h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Vivemos em busca das melhores ferramentas e sabemos o
                    potencial que existe na aplicação de IA nos negócios,
                    entendemos cada caso de uso, para potencializá-lo 10x mais,
                    com Inteligência Artificial.
                  </p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Criação de Agentes Inteligentes</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        RAG (Retrieval Augmented Generation) com dados do
                        negócio
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Segurança, Concretização e Pensamento com IA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
