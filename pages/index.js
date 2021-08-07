import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w- border">
      <Head>
        <title>Country list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">


      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://anteytech.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}Anteytech.ru

        </a>
      </footer>
    </div>
  );
}
