import { Component } from "react";



const Card = (characters: any, loading: boolean, stateInfo: any) => {
    console.log(characters)
    let counter = 0
    let monster
    let flavor
    let atk
    let def
    let monsterItem
    let flavorItem
    let atkItem
    let defItem
    const parent = document.getElementById("cardList")
    for (let i = 0 ; i < characters.length ; i++) {
        let num = loading ? "loading" : characters[i].data.length
        for (let j = 0 ; j < num ; j ++) {
            const individualCard = document.createElement("div")
            // individualCard.id = counter
            individualCard.addEventListener("click", () => stateInfo.clicked(individualCard.id))
            // parent.appendChild(individualCard)

            monster = characters[i].data[j].name
            flavor = characters[i].data[j].desc
            atk = characters[i].data[j].atk
            def = characters[i].data[j].def
            monsterItem = document.createElement("div")
            flavorItem = document.createElement("div")
            atkItem = document.createElement("div")
            defItem = document.createElement("div")
            monsterItem.className = "monsterItem parentItem"
            flavorItem.className = "flavorItem parentItem"
            atkItem.className = "monsterItem parentItem"
            defItem.className = "monsterItem parentItem"
            monsterItem.textContent = monster
            flavorItem.textContent = flavor
            atkItem.textContent = "atk: " + atk
            defItem.textContent = "def: " + def
            individualCard.appendChild(monsterItem)
            individualCard.appendChild(flavorItem)
            individualCard.appendChild(atkItem)
            individualCard.appendChild(defItem)
            counter++
        }
    }
    counter = 0       
    
    // let counter = 0
    // let monster
    // let flavor
    // let atk
    // let def
    // let monsterItem
    // let flavorItem
    // let atkItem
    // let defItem
    // const parent = document.getElementById("cardList")
    // for (let i = 0 ; i < stateInfo.characters.length ; i++) {
    //     let num = stateInfo.loading ? "loading" : stateInfo.characters[i].data.length
    //     for (let j = 0 ; j < num ; j ++) {
    //         const individualCard = document.createElement("div")
    //         individualCard.id = counter
    //         individualCard.addEventListener("click", () => stateInfo.clicked(individualCard.id))
    //         parent.appendChild(individualCard)

    //         monster = stateInfo.characters[i].data[j].name
    //         flavor = stateInfo.characters[i].data[j].desc
    //         atk = stateInfo.characters[i].data[j].atk
    //         def = stateInfo.characters[i].data[j].def
    //         monsterItem = document.createElement("div")
    //         flavorItem = document.createElement("div")
    //         atkItem = document.createElement("div")
    //         defItem = document.createElement("div")
    //         monsterItem.className = "monsterItem parentItem"
    //         flavorItem.className = "flavorItem parentItem"
    //         atkItem.className = "monsterItem parentItem"
    //         defItem.className = "monsterItem parentItem"
    //         monsterItem.textContent = monster
    //         flavorItem.textContent = flavor
    //         atkItem.textContent = "atk: " + atk
    //         defItem.textContent = "def: " + def
    //         individualCard.appendChild(monsterItem)
    //         individualCard.appendChild(flavorItem)
    //         individualCard.appendChild(atkItem)
    //         individualCard.appendChild(defItem)
    //         counter++
    //     }
    // }
    // counter = 0       
    return (
        <div id="cardList">

        </div>
    )
}

export default Card