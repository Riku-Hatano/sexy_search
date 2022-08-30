import React from "react";
import { Component } from "react";
import "./index.css"



const Card = (props: any) => {
    const childBox: any = []

    for (let i = 0 ; i < props.characters.length ; i++) {
        const monsterItem = React.createElement(
            "div",
            {
                className: "monsterItem"
            },
            props.characters[i].name
        )
        const flavorItem = React.createElement(
            "div",
            {
                className: "flavorItem"
            },
            props.characters[i].desc
        )
        const individualCard = React.createElement(
            "div",
            {
                key: i, 
                className: "parentItem",
                onClick: () => props.this.searchCard(props.characters[i].card_images[0].image_url)
            }, 
            monsterItem, flavorItem)

            childBox.push(individualCard)
        }

        const cardList = React.createElement(
            "div",
            {
                className: "cardList", 
            },
            childBox 
        )

    return (
        <>
        {cardList}
        </>
    )

}


export default Card


