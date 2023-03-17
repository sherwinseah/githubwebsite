import { Outlet } from "react-router";
import Sidebar from "../Sidebar/";
import "./index.scss";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar/>
            <div className="page">
                <span className="tags top-tags"></span> {/*&lt;body&gt;*/}
                <Outlet/>
                <span className="tags bottom-tags">
                    {/* &lt;/body&gt; */}
                    <br/>
                    <span className="bottom-tag-html"></span> {/* &lt;/html&gt; */}

                </span>
            </div>
        </div>
    ) 
}

export default Layout;