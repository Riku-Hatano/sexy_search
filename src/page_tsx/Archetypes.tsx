import react from "react"
import { useParams } from "react-router-dom"

const Archetypes = () => {
    const { archetype } = useParams<{archetype: string}>() 
    console.log(`done from ${archetype}`)

    // const { archetype } = useParams();
    console.log(useParams<{archetype: string}>())
    console.log(archetype)
    return (
        <div>
            <div>done</div>
            <p>{archetype}</p>
        </div>
    )
}

export default Archetypes