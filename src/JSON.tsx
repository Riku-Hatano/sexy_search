import axios from "axios"

import { produceWithPatches } from "immer"
import React, {Component} from "react"
import ReactDOM, { createPortal } from "react-dom"
import { createModuleResolutionCache } from "typescript"
import Card from "./card"
import "./modal.css"

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

    /*　
    searchCardは、個別のカードがクリックされた時、カードに応じた画像を拾って表示させる処理。
    都度http通信をする。
    */
    searchCard = (cardUrl: string, cardNumber: number, id: number) => {//cardUrlは、別の方法で画像を持ってきたくなった時のために一応残してある。
        let parent = document.getElementById(`individualCard${cardNumber}`) as HTMLDivElement
        parent.classList.add("added")
        const root = document.getElementById("root") as HTMLDivElement
        const parentModalWindow = document.createElement("div") as HTMLDivElement
        parentModalWindow.className = "parent-modal-window"
        root.appendChild(parentModalWindow)
        
        // const url = cardUrl
        // let blob
        // axios.get(url)
        // .then((results) => {
        //     blob = new Blob([results.data], {type: "image/jpeg"})
        // })
        // console.log(url)

        const newImage = document.createElement("img") as HTMLImageElement
        newImage.className = "modal-window"
        newImage.src = `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`
        parentModalWindow.appendChild(newImage)

        // const newImage = React.createElement(
        //     "img",
        //     {
        //         className: "modal-window",
        //         src: `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`,
        //     },
        // )
        
        console.log(parent)
        console.log(root)
        
        // return ReactDOM.createPortal (
        //     // newImage.props.children,
        //     newImage,
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
    }

    render() {
        return (
            <div id="parentroot">
                <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>    
                <Card 
                characters={this.state.characters}
                loading={this.state.loading}
                this={this}
                />
                <div id="root">

                </div>
            </div>
        )
    }
}
   
export default App


