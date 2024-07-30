// src/components/CountryCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const {
    flags,
    name,
    population,
    region,
    capital,
  } = country;

  const handleMoreClick = () => {
    navigate(`/country/${name.common}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name.common}</h3>
        <p className="text-gray-600"><strong>Population:</strong> {population.toLocaleString()}</p>
        <p className="text-gray-600"><strong>Region:</strong> {region}</p>
        <p className="text-gray-600"><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
        <button
          onClick={handleMoreClick}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
