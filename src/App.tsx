import { useState } from "react";
import "./App.scss";
import { CHECK24 } from "./CHECK24";

export function App() {
    const [img, setImg] = useState<string>("https://dummyimage.com/1096x604/bbb/fff");
    const [title, setTitle] = useState<string>("Product Creation Pool");


    return <div className="page">
        <div className="container">
            <div className="trophy">
                <div className="main-image">
                    <img src={img} alt={"Feature"} />
                </div>
                {title.length > 0 && <div className="title">
                    <div className="text">
                        {title}
                    </div>
                </div>}
                <div className="banner">
                    <CHECK24 />
                </div>
            </div>
        </div>
        <div className="config">
            <input className="title-input" type={"text"} onChange={e => setTitle(e.target.value)} value={title} />
            <input className="upload" type={'file'} onChange={(e) => {
                const files = e.target?.files;
                if (!files || files?.length === 0) {
                    return;
                }
                const file = files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setImg(e.target?.result as string);
                    }
                    reader.readAsDataURL(file);
                }
            }} />
        </div>
    </div>;
}
