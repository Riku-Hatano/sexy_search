import axios from "axios"
import React, {Component} from "react"

import { resolveModuleName } from "typescript"
import Card from "./card"

class App extends Component {
    constructor(props: any){
        super(props)
        this.state = {
            loading: true,
            characters2: []
        }
        this.clicked = this.clicked.bind(this)
    }
    clicked = (props: number) => {
        console.log("id: " + props)
    }

    async componentDidMount(){
    this.setState({
        loading: true
    })
    
    const characters: Array<any> = []
    let characters2: Array<any> = []
    let box: any = []
    let counter: number
    // fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Pendulum%20Normal%20Monster")
    //     .then(response => response.json())
    //     .then(data => {
    //         const d = data["data"] as Array<any>
    //         characters.concat(d)
    //         this.setState({
    //             loading: true
    //         })
    //     })
    //     console.log("pendulum normal")
    // fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster")
    //     .then(response => response.json())
    //     .then(data => {
    //         const d = data["data"] as Array<any>
    //         characters.concat(d)
    //         this.setState({
    //             loading: false
    //         })
    //     })
    //     console.log("normal")
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Tuner%20Monster")
    // thenで成功した場合の処理
    .then((results) => { // レスポンスが来たらthenを実行
        // console.log(results.data); // コンソールログにresultsに含まれるdataを表示
        const d = results.data["data"] as Array<any>
        characters.push(d);
    })
    // catchでエラー時の挙動を定義
    .catch(err => {
        console.log("err:", err);
    });
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Pendulum%20Normal%20Monster")
    .then((results) => { 
        const d = results.data["data"] as Array<any>
        characters.push(d);
    })
    .catch(err => {
        console.log("err:", err);
    });
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster")
    .then((results) => {
        const d = results.data["data"] as Array<any>
        characters.push(d);       
        for (let i = 0 ; i < characters.length ; i++) {
            for (let j = 0 ; j < characters[i].length ; j++) {
                box.push(characters[i][j])
            }
        }        
    })
    .catch(err => {
        console.log("err:", err);
    });
    console.log(box)
    
    // console.log(characters)
    // console.log(characters[0])
    // box = characters[0].concat(characters[1], characters[2])
    // console.log(box)




    // fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Tuner%20Monster")

    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         const d = data["data"] as Array<any>
    //         console.log(d)
    //         characters.concat(d)
    //         console.log(characters)
    //         this.setState({
    //             loading: true
    //         })
    //     })
    //     console.log("tuner normal")

        // console.log(characters)
        // console.log(characters.length)
        // console.log(characters[2])
        // newCharacters = characters[0].concat(characters[1], characters[2])
        // console.log(newCharacters)
        // console.log(Object.keys(data).length)
        this.setState({
            characters: characters
        })
    }
    render() {
        // let counter = 0
        // let monster
        // let flavor
        // let atk
        // let def
        // let monsterItem
        // let flavorItem
        // let atkItem
        // let defItem
        // console.log()
        // const parent = document.getElementById("cardList")
        // for (let i = 0 ; i < this.state.characters.length ; i++) {
        //     let num = this.state.loading ? "loading" : this.state.characters[i].data.length
        //     for (let j = 0 ; j < num ; j ++) {
        //         const individualCard = document.createElement("div")
        //         individualCard.id = counter
        //         individualCard.addEventListener("click", () => this.clicked(individualCard.id))
        //         parent.appendChild(individualCard)

        //         monster = this.state.characters[i].data[j].name
        //         flavor = this.state.characters[i].data[j].desc
        //         atk = this.state.characters[i].data[j].atk
        //         def = this.state.characters[i].data[j].def
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
            <div>
                <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>    
                <div id="cardList">
                        
                </div>
            </div>
        )
    }
}


export default App


