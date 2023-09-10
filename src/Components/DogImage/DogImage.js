import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import './DogImage.css';

export default function DogImage({ image }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = image;
        imageLoader.onload = () => { setIsLoading(false);};

        imageLoader.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        };
    }, [image]);


    return (
        <div key={image} className="DogImage">
            {isLoading || isError ? (
                <Skeleton sx={{ bgcolor: 'grey.450', borderRadius: '10px', width: '410px', height: '300px' }} animation="wave" variant="rectangular" />
            ) : (
                <img src={image} alt="" />
            )}
        </div>
    );
}
