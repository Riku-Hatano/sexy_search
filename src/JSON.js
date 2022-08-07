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
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
        }

    render() {
        const displayText = this.state.loading ? "now loading...." : this.state.character.name
        return (
            <div>
                {displayText}
            </div>
        )
    }
}
export default App
