import * as React from "react";
import {Link} from "react-router-dom";
import {LinkData} from "../models/DataLinks";
import {links} from "../models/ConstantsData";



export class Home extends React.Component {
    render() {
        const listItems = links.map((link: LinkData) =>
            <li> <Link key={link.endpoint} to={link.endpoint}>{link.endpoint}</Link> </li> );
        return (
            <div className="navigation">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}



