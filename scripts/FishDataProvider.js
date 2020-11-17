/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Tom Golden",
        species: "Goldfish",
        length: "3in",
        location: "Neighbor's backyard pond",
        diet: "Cheetos",
        image: "tom-goldfish.png"
    },
    {
        name: "Bart",
        species: "Beta",
        length: "5ft",
        location: "Where the bad fish go",
        diet: "Bad fish food",
        image: "tom-goldfish.png"
    },
    {
        name: "Annie",
        species: "Blue Tang",
        length: "2in",
        location: "Tiny fish bowl",
        diet: "Bits of apple pie",
        image: "tom-goldfish.png"
    },
    {
        name: "Marybeth Marie",
        species: "SwordFish",
        length: "6in",
        location: "Grandma's cabinet",
        diet: "Spoonfools of cinnamon",
        image: "tom-goldfish.png"
    },
    {
        name: "Mean Bean",
        species: "Tetra",
        length: "bean size",
        location: "Aluminum pot",
        diet: "Heinz beans",
        image: "tom-goldfish.png"
    },

]

/* Function */
const useFish = () => {
    return fishCollection.slice()
}
