import React from 'react';
import { observer } from 'mobx-react';
import './CatalogPage.css';


function CatalogPage() {
    // const { filmId } = useParams();
    //
    // useEffect(() => {
    //     MovieStore.getFilm(filmId);
    // }, [filmId]);
    //
    // if (!MovieStore.currentFilm) {
    //     return null;
    // }

    return (
        <div className="catalogs">
            <h2>Catalogs</h2>
            <button className="btn btn-new">New</button>
            <button className="btn btn-delete">Delete</button>
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
        </div>
    );
}


export default observer(CatalogPage);
