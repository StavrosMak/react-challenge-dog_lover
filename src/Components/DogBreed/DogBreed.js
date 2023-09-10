
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSubBreeds } from '../../Hooks/useAPI';
import DogImage from '../DogImage/DogImage';
import './DogBreed.css';

export default function DogBreed({ selectedBreed, dogImage }) {
    const [subBreeds, setSubBreeds] = useState([]);

    useEffect(() => {

        // Fetch sub-breeds
        getSubBreeds(selectedBreed)
            .then((subBreedsData) => {
                setSubBreeds(subBreedsData);
            })
            .catch(() => {
                setSubBreeds([]);
            });
    }, [selectedBreed])



    return (
        <div className="DogBreed">
            <div className='first_row'>
                <p className='DogBreedHeader'>{`Selected Breed: ${selectedBreed}`}</p>
                <DogImage image={dogImage} />
            </div>
            <div className='second_row'>
                {subBreeds.length > 0 ? (
                    <Link to={`/subbreed/${selectedBreed}`} className='button'>Sub Breeds Found</Link>
                ) : (
                    <p>No sub-breeds found for this dog.</p>
                )}
                <Link to={`/breeds/${selectedBreed.toLowerCase()}`} className='button'><span>More photos.</span></Link>
            </div>

        </div>
    )
}