import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            loading:false,
            character:{},
        }
    }
    
        componentDidMount(){
        this.setState({
            loading: true
        })
        fetch("https://pokeapi.co/api/v2/ability/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
            console.log("fetch")
        }

        render() {
        const displayText = this.state.loading ? "now loading...." : this.state.character.count
        console.log(this.state.character.results)
        return (
            <div>
                done
                {displayText}
            </div>
        )
    }
}



export default App
