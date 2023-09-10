import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DogImage from '../DogImage/DogImage';
import './DisplayBreedPhotos.css';

import { getBreedImages } from '../../Hooks/useAPI';

export default function DisplayBreedPhotos() {
    const { breed } = useParams();
    const [dogImageList, setDogImageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchBreedImages = async () => {
            try {
                const data = await getBreedImages(breed);
                setDogImageList(data);
            } catch (error) {
                setDogImageList([]);
            }
        };

        fetchBreedImages();
    }, [breed]);

    const dogsPerPage = 6;
    const start = currentPage * dogsPerPage;
    const displayDogs = dogImageList.slice(start, start + dogsPerPage);
    const isPreviousDisabled = currentPage === 0;
    const isNextDisabled = currentPage >= Math.ceil(dogImageList.length / dogsPerPage) - 1;

    return (
        <div className='DisplayBreedPhotos'>
            <h1>{breed}</h1>
            <div className='wrap'>
                <div className='BreedGallery'>
                    {displayDogs.map((img, index) => (
                        <div key={index} className='DogImg'>
                            <DogImage image={img} />
                        </div>
                    ))}
                </div>
                <div className='ButtonControls'>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className={isPreviousDisabled ? 'disabled' : ''} disabled={isPreviousDisabled}>
                        Previous
                    </button>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className={isNextDisabled ? 'disabled' : ''} disabled={isNextDisabled}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
