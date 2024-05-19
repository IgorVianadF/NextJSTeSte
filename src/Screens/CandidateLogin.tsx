import Link from "next/link";

export const CandidateLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-700">
      <nav className="bg-zinc-500 w-full">
        <ul className="flex flex-row justify-around p-4">
          <li className="text-zinc-200">
            <Link href={"/"}>Menu inicial</Link>
          </li>
          <li className="text-zinc-200">
            <Link href={""}>Teste2</Link>
          </li>
          <li className="text-zinc-200">
            <Link href={""}>Teste3</Link>
          </li>
          <li className="text-zinc-200">
            <Link href={""}>Teste4</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-1 flex-col justify-evenly items-center">
        <h2 className="">Candidate Login</h2>
        <form
          className="flex flex-col gap-8 rounded border border-zinc-300 p-6"
          action="GET"
        >
          <input
            className="p-4 bg-zinc-800 text-zinc-300 rounded border-l-sky-100"
            type="text"
          />
          <input
            className="p-4 bg-zinc-800 text-zinc-300 rounded border-l-sky-100"
            type="text"
          />
          <input
            className="p-4 bg-zinc-800 text-neutral-300 rounded"
            type="text"
          />
        </form>
      </div>
      <footer className="bg-white text-center text-zinc-900 w-full p-4">
        testeteste
      </footer>
    </div>
  );
};
