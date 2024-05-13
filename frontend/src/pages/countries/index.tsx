import { Button } from "antd";
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from "../../graphql/queries/countries";
import CountryCard from "../../components/CountryCard"
import CountriesForm from "../../components/CountriesForm"
import Link from "next/link";

export default function Countries() {
  const [countries, setCountries] = useState([])
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  const listCountries = countries.map((country, index) => <Link href={`/country/${country.code}`} key={index}><CountryCard country={country}></CountryCard></Link>)
  


  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);


    return (
    <div>
      <CountriesForm></CountriesForm>
      <div className="country__wrapper">
        {listCountries}
      </div>
    </div>);
  }
  