export default function homem() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex-1 flex justify-center items-center">
        <form action="GET" className="flex flex-col gap-8 bg-slate-600">
          <input className="" type="text" placeholder="Nome" />
          <input className="" type="text" placeholder="Email" />
          <input className="" type="text" placeholder="Senha" />
        </form>
      </div>
      <footer className="bg-slate-500 text-center w-full p-5">
        <p>Direitos reservados</p>
      </footer>
    </div>
  );
}
