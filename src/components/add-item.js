import { useState } from "react";
import Button from "./button";

const AddItemForm = ({ addListItem, targetList }) => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addListItem(title, setTitle, targetList);
  };
  return (
    <div className="add-list-item">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
        <Button type="submit" className="btn-add-list-item" title="Add" disabled={!title} />
          <div className="list-input">
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Add an item"
              className="form-control"
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
