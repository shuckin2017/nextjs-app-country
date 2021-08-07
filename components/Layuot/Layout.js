import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center  h-screen border lg:my-7 lg:mx-0 lg:rounded-3xl bg-gray-200 container lg:mx-auto overflow-scroll">
      <Head>
        <title>Список стран</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-center px-5 py-3 bg-blue-500 w-full text-white font-medium text-2xl">
        Список тран
      </header>
      <main className="flex flex-col items-center w-full flex-1">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full border-t bg-blue-500 px-5 py-3 text-white">
        <a
          className="flex items-center justify-center"
          href="https://anteytech.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Anteytech.ru
        </a>
      </footer>
    </div>
  );
}
