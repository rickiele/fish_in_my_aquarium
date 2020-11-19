
const fishCollection = [
    {
        name: "Tom Golden",
        species: "Goldfish",
        length: 6,
        location: "Neighbor's backyard pond",
        food: "Cheetos",
        image: "tom-goldfish.png"
    },
    {
        name: "Bart",
        species: "Betta",
        length: 3,
        location: "Where the bad fish go",
        food: "Bad fish food",
        image: "betta-fish.png"
    },
    {
        name: "Annie",
        species: "Blue Tang",
        length: 2,
        location: "Tiny fish bowl",
        food: "Bits of apple pie",
        image: "blue-tang.png"
    },
    {
        name: "Marybeth Marie",
        species: "SwordFish",
        length: 1,
        location: "Grandma's cabinet",
        food: "Spoonfuls of cinnamon",
        image: "swordfish.png"
    },
    {
        name: "Mean Bean",
        species: "Tetra",
        length: 5,
        location: "Aluminum pot",
        food: "Heinz beans",
        image: "tetra.png"
    },
]

/* Function */
export const useFish = () => {
    return fishCollection.slice()
}

/* Multiples of 3 Fish */
export const mostHolyFish = () => {
    
    const holyFish = []
    // Need to declare the variable, with const or let
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}


export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0){
            soldiers.push(fish)
        }
    }
    return soldiers
}


export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}