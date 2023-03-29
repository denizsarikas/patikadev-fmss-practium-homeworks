//importlar
import React from "react";
import ToDoItem from "./ToDoItem";

//app.jsten gönderilen proplara göre listedeki elemanların görüntülenmesini sağlayacak templete.

function ToDoList({items, setItems, removeItem}) {
  return (
    <div className="listContainer">
      {items.map((item, index) => (
        <ToDoItem
          key={index}
          item={item}
          id={index}
          removeItem={() => removeItem(index)}
          setItems={setItems}
        />
      ))}
    </div>
  );
}

export default ToDoList;