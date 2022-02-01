const harvestedPlants = []
const harvestPlant = (plant) => {
    for (let i = 0; i < plant.output; i++) {
        harvestedPlants.push(plant);
    }
}

const harvestCorn = (plant) => {
    for (let i = 0; i < plant.output - 3; i++) {
        harvestedPlants.push(plant)
    }
}

export const harvestPlants = (plants) => {
    for (const harvest of plants){
        if (harvest.type === "Corn") {
            harvestCorn(harvest)
        } else {
            harvestPlant(harvest)
        }
    }
    return harvestedPlants;
}