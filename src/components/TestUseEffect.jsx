import { useEffect, useState } from "react";

const TestUseEffect = () => {

    const [contador, setcontador] = useState(0);
    const [duplicado, setduplicado] = useState(false);
    
    useEffect(() => {
        console.log("Chamado todas as vezes");
    });

    useEffect(() => {
        console.log("Chamado somente uma vez");
    }, []);

    useEffect(() => {
        console.log("Chamado somente quando a dependencia for atualizada");
        if(duplicado){
            setcontador(contador * 2)
        }
    }, [duplicado]);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <button
                onClick={() => setcontador(contador + 1)}
                className="text-2xl mb-4 w-[50px] leading-[50px] bg-black text-white rounded-full"
            >
                {contador}
            </button>
            <button
                onClick={() => setduplicado(!duplicado)}
                className="border border-black px-4 py-1 rounded"
            >
                {duplicado ? "Duplicado On" : "Duplicado Off"}
            </button>
        </div>
    );
}

export default TestUseEffect;