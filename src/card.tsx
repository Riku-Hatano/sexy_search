import React from "react";
import { Component } from "react";
import "./index.css"



const Card = (props: any) => {
    // let box: any = []
    // const child = React.createElement("p", {key: 1, style:{color: "red"}}, "done")
    // const child2 = React.createElement("p", {key: 2}, "done2")
    // const child3 = React.createElement("p", {key: 3}, "done3")
    // box.push(child)
    // box.push(child2)
    // box.push(child3)
    // const parent2 = React.createElement("div", {}, [...box])
    // console.log(parent2)
    const childBox: any = []
    
    for (let i = 0 ; i < props.characters.length ; i++) {
        const individualCard = React.createElement("div", {key: i}, props.characters[i].name)
        childBox.push(individualCard)
    }


    return (
        <>
        {childBox}
        </>
    )

}


export default Card


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