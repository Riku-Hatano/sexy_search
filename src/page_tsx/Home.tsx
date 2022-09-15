import Monster from "./Monster"
import "../page_css/Home.css"

const Home = () => {
    return (
        <div>
            <head>
                <meta charSet="utf-8"></meta>
                <title>fetch data from Yu-Gi-Oh Api</title>
            </head>
            <header>
                <h1>sth</h1>
            </header>
            <a href="/monster">monster</a>
            <hr></hr>
            <a href="/spell">spell</a>
            <br></br>
            <div>
                <a href="/archetypes" id="1">archetypes1</a>
                <a href="/archetypes" id="2">archetypes2</a>
            </div>
        </div>
    )
}



export default Home