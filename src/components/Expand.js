import { useState } from "react"

const Expand = () => {
    const [expand, setExpand] = useState(false)//da hier false steht, ist 'expand' immer false. Wenn wir dann '!' verwenden, dreht es den werte um

    const goBig = () => {
        setExpand(!expand) 
    }

    return(
        <>
            <section className="container">
                <article className="ArticleContainer">
                    <div className="frageDiv">
                        <p>Why is React great?</p>
                        <button onClick={goBig}>+</button>
                    </div>

                    <div className="antwortDiv" style={expand ? {display: 'none'}:null} > 
                        <p>Fast Learning Curve</p>
                    </div>

                </article>
            </section>
        </>
    )
}

export default Expand