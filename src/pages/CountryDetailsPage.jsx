import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CountryDetailsPage() {
    const {countryId} = useParams();
    const [countryData, setCountryData] = useState ([]);
    
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
            if (response.status === 200) {
              setCountryData(response.data);
            } else {
              console.log('Loading...');
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        getData();
      }, [countryId]);

  return (
    <div>
      <div className='flex justify-center mt-32'>
            <div className='py-6 border w-[40%] bg-gray-300 border-gray-600'>
                <h2 className='text-2xl text-gray-600'>Country Details</h2>
            </div>
     </div>
     <div>
                <img
                    src={` https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
                    alt={`Flag of ${countryData.name}`}
                /> 
                <p>{countryData.name.common}</p>   
            </div>
    </div>
  )
}
