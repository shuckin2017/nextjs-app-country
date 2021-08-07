import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center  h-screen border bg-gray-200 lg:mx-auto overflow-scroll">
      <Head>
        <title>Список стран</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-center px-5 py-3 bg-blue-500 w-full text-white font-medium text-2xl shadow-lg sticky top-0 left-0 z-10">
        <div className="flex container justify-between">
          <div> Список cтран</div>
          <div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                for="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center w-full flex-1 container">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full border-t bg-blue-500 px-5 py-3 text-white">
        <a
          className="flex items-center justify-center"
          href="https://anteytech.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Shuckin.io
        </a>
      </footer>
    </div>
  );
}
