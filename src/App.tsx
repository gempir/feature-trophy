import "./App.scss";
import { CHECK24 } from "./CHECK24";

export function App() {
    return <div className="container">
        <div className="trophy">
            <div className="main-image">
                <img src="https://dummyimage.com/1096x604/bbb/fff" alt={"Feature"} />
            </div>
            <div className="title">
                <div className="text">
                    Product Creation Prio Tool
                </div>
            </div>
            <div className="banner">
                <CHECK24 />
            </div>
        </div>
    </div>;
}