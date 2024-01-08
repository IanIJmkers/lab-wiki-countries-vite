import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
            setCountriesData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
  return (
    <div>
        <div className='flex justify-center mt-8'>
            <div className='py-6 border w-[40%] bg-gray-300 border-gray-600'>
                <h2 className='text-2xl text-gray-600'>WikiCountries: Your Guide to the World</h2>
            </div>
        </div>
        <div className=''>
            {countriesData.map((country) => {
               return (
                    <ul key={country.id} className="py-10 flex mx-auto justify-center mt-8 border w-[20%]">
                        <img 
                            src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        />
                        
                        <Link className="px-4 text-xl font-semibold py-2" to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </ul>
                    )
                })}
            </div>
    </div>
  )
}
