import { useState } from "react";
import "./App.scss";
import { CHECK24 } from "./CHECK24";

export function App() {
    const [img, setImg] = useState<string>("https://dummyimage.com/1096x604/bbb/fff");
    const [title, setTitle] = useState<string>("Product Creation Pool");
    const [releaseDate, setReleaseDate] = useState<string>("2022-01-01");
    const [description, setDescription] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

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
            <input className="title-input" type={"text"} onChange={e => setTitle(e.target.value)} value={title} />
            <input className="release-date-input" type={"date"} onChange={e => setReleaseDate(e.target.value)} value={releaseDate} />
            <textarea className="description-input" onChange={e => setDescription(e.target.value)} value={description} />
            <button onClick={window.print}>Print</button>
        </div>
        <div className="container description-container">
            <div className="description">
                <div className="release">
                    {releaseDate}
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    </div>;
}
