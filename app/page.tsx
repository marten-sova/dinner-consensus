import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl text-blue-600 hover:text-blue-800">
          <Link href="/vote">Rank cuisines!</Link>
        </h1>
      </div>
    </main>
  );
}
