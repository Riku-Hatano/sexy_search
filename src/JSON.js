import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            loading:true,
            character:{},
        }
    }
    
    componentDidMount(){
    this.setState({
        loading: true
    })
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster")
    // fetch("https://pokeapi.co/api/v2/ability/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data,
                loading: false
            })
        })
        console.log("fetch")
    }

    // makeDiscriptions() {
    //     for (let i = 0 ; i < this.state.character.data.length ; i++) {
    //         let monster = this.state.character.data[i].name
    //         console.log(monster)
    //     }
    // }


    render() {
        const num = this.state.loading ? "loading" : this.state.character.data.length
        for (let i = 0 ; i < num ; i ++) {
            const flavor = this.state.character.data[i].name
            console.log(flavor)
        }
        return (
            <div>
                {flavor}
            </div>
        )
        // const displayText = this.state.loading ? "now loading...." : this.state.character.data.length
    }
}


export default App
