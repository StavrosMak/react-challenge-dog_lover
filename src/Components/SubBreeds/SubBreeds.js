import { useEffect, useState } from "react";
import { getSubBreeds, getSubBreedImage } from "../../Hooks/useAPI";
import { useParams } from "react-router-dom";
import DogImage from '../DogImage/DogImage';
import './SubBreeds.css';

export default function SubBreeds() {
    const { breed } = useParams();
    const [subBreedsImg, setSubBreedsImg] = useState([]);

    useEffect(() => {
        async function fetchSubBreedsAndImages() {
            try {
                const subBreedsData = await getSubBreeds(breed);
                const images = [];
                for (const subBreed of subBreedsData)
                 {
                    try {
                        const image = await getSubBreedImage(breed, subBreed);
                        images.push({ subBreed, image });
                    } catch (error) {
                        console.error(`Error fetching image for ${subBreed}:`, error);
                    }
                }

                setSubBreedsImg(images);
            } catch (error) {
                console.error("Error fetching data:", error);
                setSubBreedsImg([]);
            }
        }

        fetchSubBreedsAndImages();
    }, [breed]);

    return (
        <div className="SubBreed">
            <div className="subBreedsContainerWrapper">
                {subBreedsImg.map(({ subBreed, image }) => (
                    <div key={subBreed} className="subBreedsContainer">
                        <span>{subBreed}</span>
                        <DogImage image={image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
