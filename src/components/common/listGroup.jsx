import React from 'react';

const ListGroup = props => {
    const {items, textProperty, valueProperty, selectedItem, onItemSelect} = props;
    return (
        <div>
            <ul className="list-group mt-4">
                {items.map(item => (
                <li onClick = {() => onItemSelect(item)} className = {item === selectedItem ? 'list-group-item active' : 'list-group-item'} key = {item[valueProperty]}>{item[textProperty]}
                </li>
                ))}
            </ul>
        </div>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;