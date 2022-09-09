import Monster from "./Monster"


const Home = () => {
    return (
        <div>
            <button onClick={() => returnMonster()}>
                return monster
            </button>
            <a href="/monster">monster</a>
            <a href="/spell">spell</a>
        </div>
    )
}

const returnMonster = () => {
    console.log("done")
    return (
        <>
        <div>done</div>
        </>
    )
}


export default Home