import Layout from "../components/Layuot";
import SearchCountry from "../components/SearchCountry";
import CountriesList from "../components/CountriesList";

export default function Home({ countries }) {
  return (
    <Layout>
      <section className="px-3 py-2 lg:px-10 lg:py-8 w-full">
        <div className="text-xl lg:text-2xl text-gray-400 font-medium flex items-start content-start">
          Нашлось&nbsp;<span>{countries.length}</span>&nbsp;cтран
        </div>
        <SearchCountry placeholder="Faind countries by Name" />
        <CountriesList countries={countries} />
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
