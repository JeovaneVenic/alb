'use client'; // Marcar este componente como Client Component

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

export default function Contact() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/views/register'); 
    };

    return (
        <section className="container flex h-[80vh] w-[90%] items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/097.png')] bg-cover bg-center filter blur-md opacity-50"></div> {/* Imagem de fundo com desfoque e opacidade reduzida */}
            <div className="flex flex-col items-center text-center relative z-10"> {/* Ajuste para que o texto fique acima da imagem */}
                <div className="p-6">
                    <h2 className="mb-2 text-3xl text-white font-bold">Faça já o seu agendamento!</h2>
                    <p className="text-lg text-white font-light leading-none">
                        Cadastre-se agora e aproveite nossos serviços
                    </p>
                    <p className="text-lg text-white font-light leading-none">
                        de agendamento de forma fácil e prática.
                    </p>
                    <button 
                        onClick={handleButtonClick} 
                        className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-700"
                        aria-label="Realizar Cadastro"
                    >
                        Realizar cadastro.
                    </button>
                </div>
                <div className="h-full w-2/3 relative mt-4">
                    <Image
                        src="/098.png"
                        alt="Agendamento"
                        className="rounded-lg object-cover"
                        layout="fill"
                        quality={100}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
