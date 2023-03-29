//importlar

import React, { useState } from "react";
import "./ToDoItem.css";

//gönderilen propları çekiyoruz.
function ToDoItem({item, id, removeItem, setItems}) {

    //kullanılacak useStete tanımları
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  //checkbox ile kontrol edilen değerin completed değeri güncellenir
  function handleCheck() {
    setItems((prevState) =>
      prevState.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

//odaktan çıkıldığında tetiklenen bu fonksiyonda editing durumu tekrar false olarak değiştirilir ve idsi ile eşlenen değerdeki text güncellenir.
  function handleInputBlur() {
    setIsEditing(false);
    setItems((prevState) =>
      prevState.map((item, index) =>
        index === id ? { ...item, text } : item
      )
    );
  }

  return (

    //ilk divde liste elemanlarının tamamlanma veya tamamlanmama durumuna göre kullanıcıya farklı görüntü vermek amaçlı dinamik bir css sınıfı ekliyoruz
    <div
      className={
        "itemContainer " +
        (item.completed ? "checkedItems" : "uncheckedItems")
      }
    >

      <div className="checkbox-wrapper-39">
        <label>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={handleCheck}
          />
          <span className="checkbox"></span>
        </label>
      </div>

      {isEditing ? (
        <input
          id={`listItem${id}`}
          className="listItemText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <input
          id={`listItem${id}`}
          className="listItemText"
          onClick={() => setIsEditing(true)}
          value={item.text}
          onChange={() => console.log("default value vermek çözmedi")}
        />
      )}

      <button
        className="removeItemButton"
        onClick={() => removeItem(id)}
      >
        x
      </button>
    </div>
  );
}

export default ToDoItem;