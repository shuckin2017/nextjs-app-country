import { ArrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Layout from "../../components/Layuot";

export default function Country({ country }) {
  return (
    <Layout>
      <section className="lg:w-4/5 lg:justify-center lg:content-center">
        <div className="py-3 px-3 ">
          <Link href="/">
            <div className="rounded-xl bg-white py-2 px-4 flex items-center justify-center font-medium text-blue-800 shadow hover:shadow-md">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Вернуться
            </div>
          </Link>
          <div className="py-6 px-6 rounded-xl shadow bg-white mt-3">
            <div>
              <img
                src={country.flag}
                alt={country.name}
                className="w-full rounded border"
              />
            </div>
            <h1 className="text-3xl font-medium flex items-center justify-center mt-4 text-blue-800">
              {country.name}
            </h1>
            <div className="flex items-center justify-center text-sm mt-1 text-gray-400">
              {country.region}
            </div>
            <div className="flex justify-between lg:justify-evenly items-center text-center mt-8">
              <div>
                <div className="text-xl text-blue-800">
                  {country.population}
                </div>
                <div className="text-sm text-gray-400">Популяция</div>
              </div>
              <div>
                <div className="text-xl text-blue-800">{country.area}</div>
                <div className="text-sm text-gray-400">Территория</div>
              </div>
            </div>
          </div>
          <div className=" rounded-xl shadow bg-white mt-3 overflow-hidden">
            <div className="py-3 px-4 bg-gray-100 lg:px-32">
              <h4 className="text-xl text-blue-800">Подробнее</h4>
            </div>
            <div className="">
              <div className="flex justify-between border-b py-3 px-4 lg:px-32">
                <div className="text-gray-400">Столица</div>
                <div className="font-medium text-blue-800">
                  {country.capital}
                </div>
              </div>
              <div className="flex justify-between border-b py-3 px-4 lg:px-32">
                <div className="text-gray-400">Язык</div>
                <div className="font-medium text-blue-800">
                  {country.languages.map(({ name }) => name).join(", ")}
                </div>
              </div>
              <div className="flex justify-between border-b py-3 px-4 lg:px-32">
                <div className="text-gray-400">Национальный язык</div>
                <div className="font-medium text-blue-800">
                  {country.nativeName}
                </div>
              </div>
              <div className="flex justify-between border-b py-3 px-4 lg:px-32">
                <div className="text-gray-400">Национальность</div>
                <div className="font-medium text-blue-800">
                  {country.demonym}
                </div>
              </div>
              <div className="flex justify-between border-b py-3 px-4 lg:px-32">
                <div className="text-gray-400">Уровень жизни</div>
                <div className="font-medium text-blue-800">
                  {country.gini} %
                </div>
              </div>
              <div className="flex justify-between border-b py-3 px-4 lg:px-32">
                <div className="text-gray-400">Домен</div>
                <div className="font-medium text-blue-800">
                  {country.topLevelDomain}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
