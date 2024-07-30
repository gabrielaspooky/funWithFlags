// src/pages/CountryDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (loading) {
    return <div className="text-center text-2xl mt-20">Loading...</div>;
  }

  if (!country) {
    return <div className="text-center text-2xl mt-20">Country not found</div>;
  }

  const {
    name,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    borders,
    flags
  } = country;

  const nativeNames = Object.values(name.nativeName || {}).map(n => n.common).join(', ');
  const currencyList = Object.values(currencies || {}).map(currency => currency.name).join(', ');
  const languageList = Object.values(languages || {}).join(', ');
  const bordersList = borders?.join(', ') || 'N/A';

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:space-x-6 items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={flags.png}
          alt={`Flag of ${name.common}`}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-4 w-full">
          <h1 className="text-3xl font-bold mb-4">{name.common}</h1>
          <p className="text-gray-600"><strong>Native Name:</strong> {nativeNames}</p>
          <p className="text-gray-600"><strong>Population:</strong> {population.toLocaleString()}</p>
          <p className="text-gray-600"><strong>Region:</strong> {region}</p>
          <p className="text-gray-600"><strong>Subregion:</strong> {subregion}</p>
          <p className="text-gray-600"><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
          <p className="text-gray-600"><strong>Currencies:</strong> {currencyList}</p>
          <p className="text-gray-600"><strong>Languages:</strong> {languageList}</p>
          <p className="text-gray-600"><strong>Borders:</strong> {bordersList}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
