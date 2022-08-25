import React, {Component} from "react"
import Card from "./card"

class App extends Component {
    constructor(){
        super()
        this.state = {
            loading:true,
            characters: {}
        }
    }
    
    async componentDidMount(){
    this.setState({
        loading: true
    })
    let characters = []
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Pendulum%20Normal%20Monster")
        .then(response => response.json())
        .then(data => {
            characters.push(data)
            this.setState({
                loading: true
            })
            console.log(this.state.characters.data)
        })
        console.log("pendulum normal")
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster")
        .then(response => response.json())
        .then(data => {
            characters.push(data)
            this.setState({
                loading: false
            })
            console.log(this.state.characters.data)
        })
        console.log("normal")
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Tuner%20Monster")
        .then(response => response.json())
        .then(data => {
            characters.push(data)
            this.setState({
                loading: true
            })
            console.log(this.state.characters.data)
        })
        console.log("tuner normal")
    this.setState({
        characters: characters
    })
    }


    render() {
        let counter = 0
        let individualCard 
        let monster
        let flavor
        let atk
        let def
        let monsterItem
        let flavorItem
        let atkItem
        let defItem
        let descriptions = ["name", "desc", "atk", "def"]
        const parent = document.getElementById("cardList")
        for (let i = 0 ; i < this.state.characters.length ; i++) {
            let num = this.state.loading ? "loading" : this.state.characters[i].data.length
            for (let j = 0 ; j < num ; j ++) {
                individualCard = document.createElement("div")
                individualCard.id = counter
                parent.appendChild(individualCard)

                monster = this.state.characters[i].data[j].name
                flavor = this.state.characters[i].data[j].desc
                atk = this.state.characters[i].data[j].atk
                def = this.state.characters[i].data[j].def
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
                // console.log(this.state.characters[i].data[j].desc)
            }
        }
        
        
        return (
            <div>
                <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>    
                <div id="cardList">
                        
                </div>
            </div>
        )
    }
}


export default App
