import "./index.css"
import Spring from "./Spring"
import Summer from "./Summer"
import Fall from "./Fall"
import Winter from "./Winter"

const Seasons = () => {
    return (
        <div className="seasonsContainer">
            <Spring />
            <Summer />
            <Fall />
            <Winter />
        </div>
    )
}

export default Seasons;