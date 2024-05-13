import CountryCard from '@/components/CountryCard';
import { GET_COUNTRY } from '@/graphql/queries/countries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
 
export default function Country() {
const router = useRouter()
  const [country, setCountry] = useState({})

  const { loading, error, data } = useQuery(GET_COUNTRY,    {

    variables: { code :router.query.code },

    notifyOnNetworkStatusChange: true,

  });

  useEffect(() => {
    if (data) {
        console.log(data)
      setCountry(data.country);
    }
  }, [data]);

  return (
    <div>
        <CountryCard country={country}></CountryCard>
    </div>
  )
}