//importlar

import React from "react";
import "./Footer.css";

//propları çek
function Footer({items, setItems}) {

  //tamamlanmamıs itemleri say ve tanımda tut
  const incompleteItemCount = items.filter(
    (item) => !item.completed
  ).length;

  //tamamlanmışları silmeye yarayan fonksiyon
  function clearCompleted() {
    setItems((prevState) => prevState.filter((item) => !item.completed));
  }

  //classlardaki displayı none çekerek ters bir kontrolle filtreliyoruz
  function handleClick(status) {
    document.querySelectorAll(".itemContainer").forEach((item) => {
      if (status === "All") item.style.display = "flex";
      else if (status === "Active")
        item.classList.contains("checkedItems")
          ? (item.style.display = "none")
          : (item.style.display = "flex");
      else if (status === "Completed")
        item.classList.contains("uncheckedItems")
          ? (item.style.display = "none")
          : (item.style.display = "flex");
    });
  }

  return (
    <div className="footerContainer">
      <ul>
        <li>{incompleteItemCount} items left</li>
        <li>
          <div
            href="#/"
            onClick={() => handleClick("All")}
            className="footerButton"
          >
            All
          </div>
          <div
            href="#/Active"
            onClick={() => handleClick("Active")}
            className="footerButton"
          >
            Active
          </div>
          <div
            href="#/Completed"
            onClick={() => handleClick("Completed")}
            className="footerButton"
          >
            Completed
          </div>
        </li>
        <li
          id="clearCompleted"
          className="clearCompleted"
          onClick={clearCompleted}
        >
          Clear Completed
        </li>
      </ul>
      <div className="footerText">
        <p>Patika Homework</p>
        <p>Deniz Sarikas</p>
      </div>
    </div>
  );
}

export default Footer;