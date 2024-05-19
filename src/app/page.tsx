import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <h1 className="text-black">PAGINA INICIAL!!!</h1>
      <div className="bg-blue-400 rounded p-5">
        <Link href={"/CandidateRegister"}>CandidateRegister!!</Link>
      </div>
    </div>
  );
}
