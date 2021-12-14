import Button from "../Button";
import "./ListItemStyle.css";
import React, { useState } from "react";
import Input from "../Input";

const ListItem = ({ name, id, newTitleValue, onButtonDone, onButtonDelete, onButtonEdit }) => {

    const [showEditInput, setShowEditInput] = useState(false);

    const handleDelete = () => {
        onButtonDelete(id);
    };

    const handleDone = () => {
        onButtonDone(id);
    };

    const handleEdit = () => {
        onButtonEdit(id, name);
        setShowEditInput(true);
    }

    return (<li className="listItem">
        <div className="listItemText">
            <h4>{name}</h4>
        </div>
        <div className="listItemButtons">
            {showEditInput && <>
                <Input
                    name={newTitleValue}
                    placeholder="Новое название" />
            </>}
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleEdit}
            >Изменить
            </Button>
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleDone}
            >Выполнено
            </Button>
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleDelete}
            >Удалить
            </Button>
        </div>
    </li>)
}

export default ListItem;