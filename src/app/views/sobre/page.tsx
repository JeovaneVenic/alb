'use client'; // Adicionando a diretiva para marcar o componente como Client Component

import Image from "next/image";

export default function Sobre() {
  return (
    <main className="min-h-screen text-white">
      <section className="flex flex-col items-center justify-center text-center py-20 0 px-6 bg-transparent">
        <h2 className="text-5xl font-bold mb-8">Sobre Nós</h2>
        <p className="max-w-5xl text-lg mb-6">
          Bem-vindo à Barbearia do Siri, onde tradição e estilo se encontram. Nossa missão é proporcionar uma experiência única de cuidados masculinos, com profissionais qualificados e apaixonados pelo que fazem.
        </p>
        <Image src="/sobre.jpg" alt="Barbearia" width={1300} height={700} className="rounded-lg shadow-lg" />
        <p className="max-w-5xl text-lg mt-9">
          Desde a nossa inauguração, buscamos sempre oferecer os melhores serviços de corte de cabelo e barba, com um ambiente acolhedor e amigável. Venha nos conhecer e transforme seu visual com a gente!
        </p>
      </section>
    </main>
  );
}
