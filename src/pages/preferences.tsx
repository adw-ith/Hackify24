import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

interface Preference {
  [key: string]: {
    [key: string]: string[];
  };
}

const preferences: Preference[] = [
  {
    "cars": {
      "carType": ["Vintage", "Futuristic", "Prototype", "Electric", "Internal Combustion Engine (ICE)"],
      "bodyStyle": ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Wagon"],
      "fuelType": ["Gasoline", "Diesel", "Hybrid", "Plug-in Hybrid", "Electric"],
      "transmission": ["Manual", "Automatic", "Semi-Automatic", "CVT"],
      "driveType": ["Front-Wheel Drive", "Rear-Wheel Drive", "All-Wheel Drive"],
      "priceRange": ["Budget", "Mid-Range", "Luxury"],
      "color": ["Red", "Blue", "Black", "White"]
    }
  },
  {
    "movies": {
      "genre": ["Action", "Comedy", "Drama", "Horror", "Romance", "Science Fiction"],
      "rating": ["G", "PG", "PG-13", "R", "NC-17"],
      "year": ["2023", "2022", "2021", "2020", "2019", "2018"],
      "director": ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese", "James Cameron"]
    }
  },
  {
    "series": {
      "genre": ["Action", "Comedy", "Drama", "Fantasy", "Science Fiction", "Thriller"],
      "rating": ["TV-Y", "TV-Y7", "TV-G", "TV-PG", "TV-14", "TV-MA"],
      "year": ["2023", "2022", "2021", "2020", "2019", "2018"],
      "creator": ["David Benioff", "D.B. Weiss", "Vince Gilligan", "Ryan Murphy", "Greg Berlanti"]
    }
  },
  {
    "anime": {
      "genre": ["Shounen", "Shoujo", "Seinen", "Josei", "Mecha", "Slice of Life"],
      "rating": ["G", "PG", "PG-13", "R", "NC-17"],
      "year": ["2023", "2022", "2021", "2020", "2019", "2018"],
      "studio": ["Studio Ghibli", "Madhouse", "Bones", "Toei Animation", "Kyoto Animation"]
    }
  },
  {
    "nature": {
      "habitat": ["Forest", "Desert", "Ocean", "Mountains", "Grassland", "Polar"],
      "species": ["Mammals", "Birds", "Reptiles", "Amphibians", "Fish", "Invertebrates"]
    }
  },
  {
    "animals": {
      "type": ["Mammals", "Birds", "Reptiles", "Amphibians", "Fish", "Invertebrates"],
      "habitat": ["Forest", "Desert", "Ocean", "Mountains", "Grassland", "Polar"],
      "endangered": ["Endangered", "Vulnerable", "Near Threatened", "Least Concern"]
    }
  },
  {
    "bikes": {
      "type": ["Mountain Bike", "Road Bike", "Hybrid Bike", "BMX Bike", "Cruiser Bike", "Electric Bike"],
      "brand": ["Trek", "Specialized", "Giant", "Cannondale", "Scott", "Santa Cruz"]
    }
  },
  {
    "politics": {
      "ideology": ["Liberal", "Conservative", "Socialist", "Capitalist", "Anarchist", "Centrist"],
      "party": ["Democratic Party", "Republican Party", "Green Party", "Libertarian Party", "Socialist Party", "Independent"]
    }
  },
  {
    "sports": {
      "type": ["Football", "Basketball", "Soccer", "Baseball", "Tennis", "Golf"],
      "league": ["NFL", "NBA", "MLB", "MLS", "NHL", "PGA Tour"]
    }
  },
  {
    "photography": {
      "genre": ["Landscape", "Portrait", "Street", "Nature", "Wildlife", "Macro"],
      "camera": ["Canon", "Nikon", "Sony", "Fujifilm", "Panasonic", "Olympus"]
    }
  },
  {
    "novels": {
      "genre": ["Mystery", "Romance", "Fantasy", "Science Fiction", "Thriller", "Historical Fiction"],
      "author": ["Stephen King", "J.K. Rowling", "George R.R. Martin", "Agatha Christie", "Dan Brown"]
    }
  },
  {
    "comics": {
      "genre": ["Superhero", "Manga", "Graphic Novel", "Humor", "Fantasy", "Horror"],
      "publisher": ["DC Comics", "Marvel Comics", "Dark Horse Comics", "Image Comics", "IDW Publishing"]
    }
  },
  {
    "music": {
      "genre": ["Pop", "Rock", "Hip Hop", "Country", "Electronic", "R&B"],
      "artist": ["Taylor Swift", "Ed Sheeran", "Beyoncé", "Kanye West", "Ariana Grande"]
    }
  }
];

export default function Preferences() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPreference, setSelectedPreference] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

//   selected preferences
    const [prefer, setPrefer] = useState<string[]>([]);


  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedPreference('');
    setSelectedOption('');
  };

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPreference(event.target.value);
    setSelectedOption('');
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

   return (
    <section style={{padding: "20px", height: "100dvh", width: "100dvw", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "70%", height: "30dvh",background: "slategray", border: "1px solid black", borderRadius: "10px" , display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-evenly"}}>
          <select className='select-preferences' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {preferences.map((preferenceGroup, index) => (
              <option key={index} value={Object.keys(preferenceGroup)[0]}>{Object.keys(preferenceGroup)[0]}</option>
            ))}
          </select>

          <select className='select-preferences' value={selectedPreference} onChange={handlePreferenceChange} disabled={!selectedCategory}>
            <option value="">Select Preference</option>
            {selectedCategory &&
              preferences.find((pref) => Object.keys(pref)[0] === selectedCategory)?.[selectedCategory] &&
              Object.keys(preferences.find((pref) => Object.keys(pref)[0] === selectedCategory)![selectedCategory]!).map((preference, index) => (
                <option key={index} value={preference}>{preference}</option>
              ))}
          </select>
          <select className='select-preferences' value={selectedOption} onChange={handleOptionChange} disabled={!selectedPreference}>
            <option value="">Select Option</option>
            {selectedCategory && selectedPreference &&
              preferences.find((pref) => Object.keys(pref)[0] === selectedCategory)?.[selectedCategory]?.[selectedPreference] &&
              preferences.find((pref) => Object.keys(pref)[0] === selectedCategory)?.[selectedCategory]?.[selectedPreference].map((option: string, index: number) => (
                <option key={index} value={option} onClick={(e:any) => {setPrefer([...prefer, e.target.value])}}>{option}</option>
              ))}
          </select>
        </div>
        <div style={{padding: "20px 10px"}}>
            <h4 style={{fontSize: "24px"}}>Selected Prefereences</h4>
            {prefer.map((pre, index) => (
                <p key={index} style={{fontSize: "16px", display: "inline-block", padding: "5px"}}>{pre}<span><MdCancel /></span></p>
            ))};
        </div>
    </section>
  );
}
