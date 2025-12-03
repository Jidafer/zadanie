import React from 'react';

const subwayStationsList = [
  { name: "Арбатская", value: "Arbat" }, 
  { name: "Александровский сад", value: "Alexanders Garden" },
  { name: "Московская", value: "Moscow" },
  { name: "Театральная", value: "Theatr" }, 
];

const FilterCafes = ({ selectedSubway, onSelectSubway }) => {
  const handleChange = (event) => {
    onSelectSubway(event.target.value);
  };

  return (
    <div className="controls">
      <select 
        name="subway" 
        id="subway" 
        onChange={handleChange} 
        value={selectedSubway}
      >
        <option value="All">Все</option>
        {subwayStationsList.map((station) => (
          <option key={station.value} value={station.value}>
            {station.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;