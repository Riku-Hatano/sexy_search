import axios from "axios"

import { produceWithPatches } from "immer"
import React, {Component} from "react"
import { FC } from "react"
import { VFC } from "react"
import ReactDOM from "react-dom"
import { blob } from "stream/consumers"
import Card from "./card"

type Props = {
}
type State = {
    loading: boolean
    characters: any
}
class App extends Component <Props, State> {

    constructor(props: any){
        super(props)
        this.state = {
            loading: true,
            characters: {}
        }
        this.searchCard = this.searchCard.bind(this)
    }

    searchCard = (props: string, cardNumber: number, id: number) => {
        let parent = document.getElementById(`individualCard${cardNumber}`) as HTMLDivElement
        parent.classList.add("added")
        
        const url = props
        let blob
        axios.get(url)
        .then((results) => {
            blob = new Blob([results.data], {type: "image/jpeg"})
        })
        console.log(url)

        const newImage = document.createElement("img")
        newImage.className = "image"
        newImage.src = `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`
        parent.appendChild(newImage)
        console.log(props)

        // const newImage = React.createElement(
        //     "p",
        //     {
        //         className: "image",
        //         children: "done"
        //     },
        // )

        // type Props = {
        //     children ?: React.ReactNode
        // }
        
        // console.log(newImage)
        // console.log(newImage.props.children)
        // console.log(newImage.props.className)
        // console.log(parent)
        
        // return ReactDOM.createPortal (
        //     // newImage.props.children,
        //     newImage.props.children,
        //     parent
        // )
    }

    
    componentDidMount(){
        this.setState({
            loading: true
        })
        
        const characters: Array<any> = []
        let box: any = []
        
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Tuner%20Monster")
        // thenで成功した場合の処理
        .then((results) => { // レスポンスが来たらthenを実行
            // console.log(results.data); // コンソールログにresultsに含まれるdataを表示
            const d = results.data["data"] as Array<any>
            characters.push(d);
        })
        .then(() => axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Pendulum%20Normal%20Monster"))
        .then((results) => { 
            const d = results.data["data"] as Array<any>
            characters.push(d);
        })
        .then(() => axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster"))
        .then((results) => {
            const d = results.data["data"] as Array<any>
            characters.push(d);       
            for (let i = 0 ; i < characters.length ; i++) {
                for (let j = 0 ; j < characters[i].length ; j++) {
                    box.push(characters[i][j])
                }
            }        
        })
        .then(() => {
            this.setState({
                characters: box
            })
        })
        // catchでエラー時の挙動を定義
        .catch(err => {
            console.log("err:", err);
        })

        // axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Pendulum%20Normal%20Monster")
        // .then((results) => { 
        //     const d = results.data["data"] as Array<any>
        //     characters.push(d);
        //     console.log("2")
        // })
        // .catch(err => {
        //     console.log("err:", err);
        // });
        // await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster")
        // .then((results) => {
        //     const d = results.data["data"] as Array<any>
        //     characters.push(d);       
        //     console.log("3")
        //     for (let i = 0 ; i < characters.length ; i++) {
        //         for (let j = 0 ; j < characters[i].length ; j++) {
        //             box.push(characters[i][j])
        //         }
        //     }        
        // })
        // .catch(err => {
        //     console.log("err:", err);
        // });
    }

    render() {
        return (
        <div id="root">
            <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>    
            <Card 
            characters={this.state.characters}
            loading={this.state.loading}
            this={this}
            />
        </div>
        )
    }
}
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

       
        
        

export default App
