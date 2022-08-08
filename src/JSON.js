import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            loading:false,
            character: {},
        }
    }
    
    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch("https://pokeapi.co/api/v2/ability")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
        }

    render() {
        console.log(this.state.character.results)
        console.log(this.state.character)

        const displayText = this.state.loading ? "now loading...." : this.state.character.results[0].name
        const displayText2 = this.state.loading ? "now loading...." : this.state.character.count
        return (
            <div>
                <div>
                    {displayText}
                </div>
                <div>
                    {displayText2}
                </div>
            </div>
        )
    }
}
export default App
