// import BoasVindas from "./components/BoasVindas";
// import { CardDefault } from "./components/Card";
// import { Aluno, Turma, Professor } from "./components/Classe";

import Perfil from "./components/Perfil";
import PerfilButton from "./components/PerfilButton";

const App = () => {
  return (
    <>
      {/* <BoasVindas
        nome="Marcos"
        turma="FS22"
      />
      <BoasVindas
        nome="Nagila"
        turma="FS22"
      />
      <BoasVindas
        nome="Matheus"
        turma="FS31"
      />
      <Turma nome={"FS22"}>
        <Professor>Gleidson</Professor>
        <Aluno nome={"Well"} />
        <Aluno nome={"Eduardo"} />
        <Aluno nome={"Leo"} />
        <Aluno nome={"Marcos"} />
        <div>
          <h1>Qualquer coisa</h1>
        </div>
      </Turma>
      <Turma nome={"FS31"}>
        <Professor>Elias</Professor>
        <Aluno nome={"Matheus"} />
        <Aluno nome={"Adriana"} />
        <Aluno nome={"Isaac"} />
        <Aluno nome={"Magnum"} />
      </Turma>

      <CardDefault 
        urlImagem={"https://cdn.motor1.com/images/mgl/KPK4R/s3/bmw-320i-m-sport-2021-teste-br.jpg"}
        titulo={"Meu titulo"}
        descricao={"lorem ipsum dolor"}
      /> */}
      <Perfil>
        <PerfilButton
          link={"https://linkedin.com/in/gleidson-teixeira"}
          titulo={"Linkedin"}
        />
        <PerfilButton
          link={"https://github.com/gleidsonteixeira"}
          titulo={"Github"}
        />
      </Perfil>
      <Perfil>
        <PerfilButton
          link={"https://google.com"}
          titulo={"Google"}
        />
      </Perfil>
    </>
  );
}

export default App;