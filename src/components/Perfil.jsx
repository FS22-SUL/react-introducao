const Perfil = ({ children, fotoPerfil, nome, titulo, localizacao, cargo }) => {
    return (
        <>
            <div className="w-full h-screen bg-myGrey-900 flex justify-center items-center font-Inter text-white">
                <div className="w-[400px] bg-myGrey-800 rounded-xl p-[40px]">
                    <img 
                        src={fotoPerfil}
                        alt={titulo} 
                        className="w-[100px] rounded-full m-auto"
                    />
                    <div className="text-center">
                        <h1 className="text-[28px] font-bold mt-4">{nome}</h1>
                        <h6 className="font-bold text-myGreen mb-4">{localizacao}</h6>
                        <p>{cargo}</p>
                    </div>
                    <div className="mt-6">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Perfil;