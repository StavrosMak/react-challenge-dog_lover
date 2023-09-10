

export const getRandomImages = async (imageCount) => {
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${imageCount}`);
        return (await response.json()).message;
    }
    catch (error) {
        console.error("Error fetching dog images:", error);
        return [];
    }
}


export const getBreedList = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        return (await response.json()).message;
    } catch (error) {
        console.error("Error fetching dog images:", error);
        return [];
    }
}


export const getBreedImages = async (breed, count) => {
    try {
        const apiUrl = `https://dog.ceo/api/breed/${breed}/images${count ? `/random/${count}` : ''}`;
        const response = await fetch(apiUrl);
        return (await response.json()).message;
    } catch (error) {
        console.error("Error fetching dog images:", error);
        return [];
    }
};


export const getSubBreeds = async (breed) => {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
        return (await response.json()).message;
    } catch (error) {
        console.error("Error fetching dog images:", error);
        return [];
    }
}



export const getSubBreedImage = async (breed, subBreed) => {
    try {
        const response = await fetch(` https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
        return (await response.json()).message;
    } catch (error) {
        console.error("Error fetching dog images:", error);
        return [];
    }
}