const growingPlants = []
export const addPlant = (seed) => {
    if (!Array.isArray(seed)) {
        growingPlants.push(seed)
    } else {

    growingPlants.push(seed[0]);
    growingPlants.push(seed[1]);
    }
}

export const usePlants = () => {
    return growingPlants;
}