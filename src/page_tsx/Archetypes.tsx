import react, { useEffect } from "react"

import axios from "axios"
import { useState } from "react" 

import React, {Component} from "react"


import Card from "../make_modal_card/card"
import ModalWindow from "../make_modal_card/modal"
import { useParams } from "react-router-dom"



const Archetypes = () => {
    const [values, setValues] = useState({
        loading: true,
        characters: {},
        modalImage: "https://storage.googleapis.com/ygoprodeck.com/pics/38955728.jpg",
    })
    const ComponentDidMount = () => {
        const { archetype } = useParams<{archetype: string}>() 
        setValues({
            ...values,
            loading: true
        })
        
        const characters: Array<any> = []
        let box: any = []
        
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + archetype)
        .then((results) => {
            const d = results.data["data"] as Array<any>
            characters.push(d);       
            for (let i = 0 ; i < characters.length ; i++) {
                for (let j = 0 ; j < characters[i].length ; j++) {
                    box.push(characters[i][j])
                    console.log(characters[i][j])
                }
            }        
        })

        .then(() => {
            setValues({
                ...values,
                characters: box
            })
        })
        // catchでエラー時の挙動を定義
        .catch(err => {
            console.log("err:", err);
        })
    }
    ComponentDidMount();
    // useEffect(() => {
    //     ComponentDidMount();
    // }, [])
    
    return (
        <div id="parentroot">
            <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
            <div>done</div>
            <div>
                <Card 
                characters={values.characters}
                loading={values.loading}
                this={this}
                />
            </div>    
            <div>
                <ModalWindow
                src={values.modalImage}
                this={this}
                />
            </div>
        </div>
    )
}


///////////////////////////////////////
////////////下が元のやつ///////////////
/////////////////////////////////////


// class Archetypes extends Component <Props, State> {
//     constructor(props: any){
//         super(props)
//         this.state = {
//             loading: true,
//             characters: {},
//             modalImage: "https://storage.googleapis.com/ygoprodeck.com/pics/38955728.jpg",
//         }
//         this.searchCard = this.searchCard.bind(this)
//     }

//     /*　
//     searchCardは、個別のカードがクリックされた時、カードに応じた画像を拾って表示させる処理。
//     都度http通信をする。
//     */
//     searchCard = (cardNumber: number, id: number) => {//cardUrlは、別の方法で画像を持ってきたくなった時のために一応残してある。
//         // クリックされたカードの背景を紫色のする処理
//         let parent = document.getElementById(`individualCard${cardNumber}`) as HTMLDivElement
//         parent.classList.add("added")

//         // モーダルウインドウの画像のsrcを変更する処理
//         const imgsrc = `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`
//         this.setState({
//             modalImage: imgsrc
//         })
//         console.log(this.state.modalImage)

//         // モーダルウインドウの表示/非表示を切り替える処理
//         const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
//         parentModalWindow.style.display = "inline"
//     }   
//     eraseModalWindow() {
//         const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
//         parentModalWindow.style.display = "none"
//     }

//     componentDidMount(){
//         const { archetype } = useParams<{archetype: string}>() 
//         console.log(`done from ${archetype}`)
//         // const { archetype } = useParams();
//         console.log(useParams<{archetype: string}>())
//         console.log(archetype)
//         this.setState({
//             loading: true
//         })
        
//         const characters: Array<any> = []
//         let box: any = []
        
//         axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetypes=" + archetype)
//         .then((results) => {
//             const d = results.data["data"] as Array<any>
//             characters.push(d);       
//             for (let i = 0 ; i < characters.length ; i++) {
//                 for (let j = 0 ; j < characters[i].length ; j++) {
//                     box.push(characters[i][j])
//                 }
//             }        
//         })

//         .then(() => {
//             this.setState({
//                 characters: box
//             })
//         })
//         // catchでエラー時の挙動を定義
//         .catch(err => {
//             console.log("err:", err);
//         })
//     }
    

//     render() {
//         return (
//             <div id="parentroot">
//                 <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
//                 <div>
//                     <Card 
//                     characters={this.state.characters}
//                     loading={this.state.loading}
//                     this={this}
//                     />
//                 </div>    
//                 <div>
//                     <ModalWindow
//                     src={this.state.modalImage}
//                     this={this}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }
   



export default Archetypes
// import react from "react"
// import { useParams, withRouter } from "react-router-dom"
// import axios from "axios"

// import React, {Component} from "react"


// import Card from "../make_modal_card/card"
// import ModalWindow from "../make_modal_card/modal"

// function CallArchetype() {
//     const { archetype } = useParams<{archetype: string}>() 
//     console.log(`done from ${archetype}`)
//     // const { archetype } = useParams();
//     console.log(useParams<{archetype: string}>())
//     console.log(archetype)
// }


// type Props = {
// }
// type State = {
//     loading: boolean
//     characters: any
//     modalImage: string
// }
// class Archetypes extends Component <Props, State> {
//     constructor(props: any){
//         super(props)
//         this.state = {
//             loading: true,
//             characters: {},
//             modalImage: "https://storage.googleapis.com/ygoprodeck.com/pics/38955728.jpg",
//         }
//         this.searchCard = this.searchCard.bind(this)
//     }

//     /*　
//     searchCardは、個別のカードがクリックされた時、カードに応じた画像を拾って表示させる処理。
//     都度http通信をする。
//     */
//     searchCard = (cardNumber: number, id: number) => {//cardUrlは、別の方法で画像を持ってきたくなった時のために一応残してある。
//         // クリックされたカードの背景を紫色のする処理
//         let parent = document.getElementById(`individualCard${cardNumber}`) as HTMLDivElement
//         parent.classList.add("added")

//         // モーダルウインドウの画像のsrcを変更する処理
//         const imgsrc = `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`
//         this.setState({
//             modalImage: imgsrc
//         })
//         console.log(this.state.modalImage)

//         // モーダルウインドウの表示/非表示を切り替える処理
//         const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
//         parentModalWindow.style.display = "inline"
//     }   
//     eraseModalWindow() {
//         const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
//         parentModalWindow.style.display = "none"
//     }

//     componentDidMount(){
//         const { archetype } = useParams<{archetype: string}>() 
//         console.log(`done from ${archetype}`)
//         // const { archetype } = useParams();
//         console.log(useParams<{archetype: string}>())
//         console.log(archetype)
//         this.setState({
//             loading: true
//         })
        
//         const characters: Array<any> = []
//         let box: any = []
        
//         axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetypes=" + archetype)
//         .then((results) => {
//             const d = results.data["data"] as Array<any>
//             characters.push(d);       
//             for (let i = 0 ; i < characters.length ; i++) {
//                 for (let j = 0 ; j < characters[i].length ; j++) {
//                     box.push(characters[i][j])
//                 }
//             }        
//         })

//         .then(() => {
//             this.setState({
//                 characters: box
//             })
//         })
//         // catchでエラー時の挙動を定義
//         .catch(err => {
//             console.log("err:", err);
//         })
//     }
    

//     render() {
//         return (
//             <div id="parentroot">
//                 <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
//                 <div>
//                     <Card 
//                     characters={this.state.characters}
//                     loading={this.state.loading}
//                     this={this}
//                     />
//                 </div>    
//                 <div>
//                     <ModalWindow
//                     src={this.state.modalImage}
//                     this={this}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }
   



// export default withRouter(Archetypes)