import React from 'react';
import './CatalogTable.css';
import Row from '@components/common/CatalogTable/Row.jsx';


function CatalogPage({ catalogs, onSelectClick }) {
    const rows = catalogs.map(catalog => <Row key={catalog.id} {...catalog} onSelectClick={onSelectClick}/>);

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
                {rows}
            </tbody>
        </table>
    );
}


export default CatalogPage;
