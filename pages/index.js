import { useState } from "react";
import Layout from "../components/Layuot";
import SearchCountry from "../components/SearchCountry";
import CountriesList from "../components/CountriesList";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  const filterCountry = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.capital.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  return (
    <Layout>
      <section className="px-3 py-2 lg:py-8 w-full">
        <div className="text-xl lg:text-2xl text-gray-400 font-medium flex items-start content-start">
          Нашлось&nbsp;<span>{countries.length}</span>&nbsp;cтран
        </div>
        <SearchCountry
          placeholder="Введите название страны или столицу"
          onChange={onInputChange}
        />
        <CountriesList countries={filterCountry} />
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
