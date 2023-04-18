import React from 'react';
import './CatalogTable.css';
import Row from '@components/common/CatalogTable/Row.jsx';


function CatalogPage({ catalogs }) {
    const rows = catalogs.map(catalog => <Row key={catalog.id} {...catalog} />);

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
