import React from 'react';
import brukImg from '../images/biruk_a.jpeg';
import ImageCard from './ImageCard';
// import { Heart } from 'react-feather';
import data from '../mockdata.json';
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

// const brukImg = data.people[0].imageUrl;

const Card = () => {
  return (
    <div className="grid grid-cols-2 bg-white rounded-md shadow-xl py-10 px-5 max-w-5xl mx-auto">
      <div className='ml-5 mr-2' >
        {data.people.map((person) => (
          <div key={person.name}> 
            <ImageCard imageSrc={brukImg} >
                <h3 className='text-xl font-sans font-bold mb-1'>{person.name}</h3>
                <p className='text-sm font-sans font-bold'>{person.occupation}</p>
                <p className='text-sm font-sans font-bold'>{person.officeLocation}</p>
                {/* <div className='space-x-4 mt-4'>
                  <button className='btn'><Heart /></button>
                </div> */}
              </ImageCard>
          </div>
        ))}
      </div>
      <div>
      {data.people.map((person) => (
          <div key={person.name}> 
            <div> 
              <h3 className='text-xl font-mono font-bold mb-1'>{person.description.a2svExperience.title}</h3>
              <p  className='text-sm font-poppins mb-1'>{person.description.a2svExperience.content}</p>
            </div>
            <div> 
              <h3 className='text-xl font-mono font-bold mb-1'>{person.description.currentWork.title}</h3>
              <p  className='text-sm font-poppins mb-1'>{person.description.currentWork.content}</p>
            </div>
            <div> 
              <h3 className='text-xl font-mono font-bold mb-1'>{person.description.impactOfA2SV.title}</h3>
              <p  className='text-sm font-poppins mb-1'>{person.description.impactOfA2SV.content}</p>
            </div>
          </div>

        ))}
        
      </div>
    
    </div>
  );
};

export default Card;
