import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'
import { mostHolyFish } from './FishDataProvider.js'
import { soldierFish } from './FishDataProvider.js'
import { nonHolyFish } from './FishDataProvider.js'

// Separate by types
// 1.) Holy fish
// 2.) Soldiers
// 3.) unworthy


export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")

    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const unworthyFish = nonHolyFish()

    for (const fishObject of holyFish) {
        // console.log("one fish!", fishObject)
        const fishHTMLRepresentations = Fish(fishObject)
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTMLRepresentations
    }
    for (const fishObject of soldiers) {
        // console.log("one fish!", fishObject)
        const fishHTMLRepresentations = Fish(fishObject)
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTMLRepresentations
    }
    for (const fishObject of unworthyFish) {
        // console.log("one fish!", fishObject)
        const fishHTMLRepresentations = Fish(fishObject)
        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTMLRepresentations
    }
}