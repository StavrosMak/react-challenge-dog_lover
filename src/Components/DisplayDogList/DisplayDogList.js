import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getRandomImages, getBreedList, getBreedImages } from '../../Hooks/useAPI';
import DogBreed from '../DogBreed/DogBreed';
import DisplayRandomImages from '../DisplayRandomImages/DisplayRandomImages';
import Search from '../Search/Search';
import './DisplayDogList.css';

export default function DisplayDogList() {
    const [breedList, setBreedList] = useState([]);
    const [error, setError] = useState(null);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [dogImageList, setDogImageList] = useState([]);

    useEffect(() => { //List of breeds.
        getBreedList()
            .then((data) => {
                const breeds = Object.keys(data);
                setBreedList(breeds);
            })
            .catch(() => {
                setBreedList([]);
                setError('Error fetching breeds');
            })
    }, []);

    const handleBreedChange = (event) => { //Selected breed changed
        getBreedImages(event.target.value, 1)
            .then((data) => {
                setSelectedBreed(event.target.value);
                setDogImageList(data);

            })
            .catch(() => {
                setDogImageList([]);
                setError('Error fetching dog image.');
            });
    };


    useEffect(() => { //random dog images(if selectedBreed is null)
        getRandomImages(6) // Fetch 6 random dog images
            .then((images) => {
                setDogImageList(images);
            })
            .catch(() => {
                setDogImageList([]);
                setError("Error fetching random Images");
            });
    }, []);
    console.log('list');


    return (
        <div className="DisplayDogList">
            <div className='DogListContainer'>
                <div className='first-row'>
                    <FormControl>
                        <InputLabel>Select a breed</InputLabel>
                        <Select value={selectedBreed} onChange={handleBreedChange} displayEmpty>
                            <MenuItem value="" disabled>Select a breed</MenuItem>
                            {breedList.map((breed, index) => (
                                <MenuItem key={index} value={breed}>{breed}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Search breedList={breedList} />
                </div>
                <div className='second-row'>
                    {error ? (
                        <div className="error-message">{error}</div>
                    ) : selectedBreed ? (
                        <DogBreed selectedBreed={selectedBreed} dogImage={dogImageList} />
                    ) : (
                        <DisplayRandomImages countImages={6} />
                    )}
                </div>
            </div>
        </div>
    );
}
