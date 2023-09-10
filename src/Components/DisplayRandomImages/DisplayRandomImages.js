import { useEffect, useState } from "react"
import { getRandomImages } from '../../Hooks/useAPI';
import DogImage from "../DogImage/DogImage";
import './DisplayRandomImages.css'

export default function DisplayRandomImages({ countImages,header }) {

    const [dogImageList, setDogImageList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRandomImages(countImages)
            .then((images) => {
                setDogImageList(images);
                setError(null);
            })
            .catch((error) => {
                setDogImageList([]);
                setError(error.message);
            });
    }, [countImages]);


    return (
        <div className="DisplayRandomImages">
            {header && <h2 className="randomDogsHeader">{header}</h2>}
            {error && <p style={{color:'red'}}>{error}</p>}
            <div className="dog-image-container">
                {dogImageList.map((image, index) => (
                    <DogImage image={image} />

                ))}
            </div>

        </div>

    )
}