import axios from "axios"
import { produceWithPatches } from "immer"
import React, {Component} from "react"
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
        this.clicked = this.clicked.bind(this)
    }
    clicked = (props: number) => {
        console.log("id: " + props)
    }

    
    componentDidMount(){
        this.setState({
            loading: true
        })
        
        const characters: Array<any> = []
        let characters2: Array<any> = []
        let box: any = []
        
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
            characters2.push(d);
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
        this.setState({
            characters: box
        })
        console.log(this.state.characters)
    }

    render() {
        return (
        <div>
            <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>    
            <Card stateInfo={this.state}/>
        </div>
        )
    }
}


export default App
