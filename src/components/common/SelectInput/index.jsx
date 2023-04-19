import React from 'react';
import Item from '@components/common/SelectInput/Item';


function Index({items, value, onChange}) {
    const options = Object.keys(items).map(key => ({ name: items[key], value: key }));
    const selects = options.map((item, i) => <Item key={i} {...item} />);

    return (
        <select value={value} onChange={onChange}>
            {selects}
        </select>
    );
}


export default Index;
