import React from 'react';
import {observer} from 'mobx-react';
import './CatalogTable.css';


function CatalogPage() {
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Vertical</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type="checkbox"/></td>
                <td>Catalog 1</td>
                <td>Vertical 1</td>
                <td>
                    <button className="btn btn-primary">Set Primary</button>
                </td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td>Catalog 2</td>
                <td>Vertical 2</td>
                <td>
                    <button className="btn btn-primary">Set Primary</button>
                </td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td>Catalog 3</td>
                <td>Vertical 3</td>
                <td>
                    <button className="btn btn-primary">Set Primary</button>
                </td>
            </tr>
            </tbody>
        </table>
    );
}


export default observer(CatalogPage);
