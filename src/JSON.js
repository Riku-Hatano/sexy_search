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
        let card = document.getElementById("card")
        for (let i = 0 ; i < this.state.characters.length ; i++) {
            let num = this.state.loading ? "loading" : this.state.characters[i].data.length
            for (let j = 0 ; j < num ; j ++) {
                const monster = this.state.characters[i].data[j].name
                const flavor = this.state.characters[i].data[j].desc
                const monsterItem = document.createElement("div")
                const flavorItem = document.createElement("div")
                monsterItem.className = "monsterItem parentItem"
                flavorItem.className = "flavorItem parentItem"
                monsterItem.textContent = monster
                flavorItem.textContent = flavor
                card.appendChild(monsterItem)
                card.appendChild(flavorItem)
                // console.log(this.state.characters[i].data[j].desc)
            }
        }
        
        
        return (
            <div>
                <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>    
                <div id="cardList">
                    <div id="card">
                    </div>     
                </div>
            </div>
        )
    }
}


export default App
