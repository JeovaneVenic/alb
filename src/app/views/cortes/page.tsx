'use client'; // Adicionando a diretiva para marcar o componente como Client Component

import { useState } from "react";
import Image from "next/image";

export default function Shop() {
  const [imagemPrincipal, setImagemPrincipal] = useState("/corte1.png");
  const [imagensPequenas, setImagensPequenas] = useState([
    "/corte2.png",
    "/corte3.png",
    "/corte4.png"
  ]);

  const trocarImagens = (novaImagem) => {
    setImagemPrincipal(novaImagem);
    setImagensPequenas((imagensPequenasAnteriores) =>
      imagensPequenasAnteriores.map((img) => (img === novaImagem ? imagemPrincipal : img))
    );
  };

  return (
    <main className="relative flex items-center justify-center h-screen bg-transparent">
      <section className="relative z-10 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px] border border-gray-600 rounded-full flex items-center justify-center">
          
          {/* Ponto de luz radial atrás da imagem grande */}
          <div
            className="absolute w-[320px] h-[320px] bg-[radial-gradient(circle,_white_0%,_transparent_70%)] opacity-30 rounded-full -z-10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>

          {imagensPequenas.map((imagem, indice) => (
            <div
              key={indice}
              className={`absolute cursor-pointer rounded-full overflow-hidden ${
                indice === 0
                  ? "-top-4 -left-4"
                  : indice === 1
                  ? "-right-4 -top-4"
                  : "bottom-[-120px] left-1/2 transform -translate-x-1/2"
              } w-24 h-24`}
              onClick={() => trocarImagens(imagem)}
              style={{
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src={imagem}
                alt={`Corte${indice + 2}`}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          ))}
          
          <div
            className="w-[350px] h-[350px] rounded-full overflow-hidden"
            style={{
              boxShadow: "0 0 20px rgba(10, 10, 10, 3)", 
            }}
          >
            <Image
              src={imagemPrincipal}
              alt="Principal"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 mb-4">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Faça agora seu agendamento!
        </button>
      </div>
    </main>
  );
}
