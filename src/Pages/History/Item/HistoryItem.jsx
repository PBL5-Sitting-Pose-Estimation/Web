import { Button } from "react-bootstrap"
import { API_URL } from "../../../Utils/constants"

const style = {
    borderRed: {
        border: "2px solid red"
    },
    borderGreen: {
        border: "2px solid green"
    }
}

const HistoryItem = (props) => {
    return (
        <div className="history-item" style={props.item.predict_label === "Thang lung" ? style.borderGreen : style.borderRed}>
            <div className="label">{props.item.predict_label}</div>
            <img src={API_URL + "history/img/" + props.item.path} alt=""></img>
            <div className="btn-container">
                <Button variant="success" >True</Button>
                <Button variant="danger" style={{marginLeft: "auto"}}>False</Button>
            </div>
        </div>
    )
}

export default HistoryItem