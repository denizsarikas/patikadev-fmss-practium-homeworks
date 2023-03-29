//importlar
import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";


function App() {

  //input ve item değerlerini tutmak için useState tanımları yapıyorum ve birkaç dummy item değeri veriyorum bu objeyi boş olarak da tanımlayabilirdim.
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "Practium 2. Ödevi yap", completed: true },
    {
      id: 2,
      text: "BlogPostEditController neden auth ile düzgün çalışmıyor bak",
      completed: false,
    },
    { id: 3, text: "Deploy et", completed: false },
    { id: 4, text: "Redux anla...", completed: false },
  ]);

  //buttona tıklandığında tetiklenen fonksiyon, value olarak yazılan değeri kullanıyor
  function addItem(e) {

    //eklenecek yeni item için benzersiz bir id oluşturuyor, eğer daha önce hiç id eklenmemişse 1 olarak ekleniyor
      const newId = items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;

      //eski itemleri tutarak sonuna inputtan taşınan text değeri ve yeni benzersiz id ile yeni item ekleniyor
      setItems([...items, { id: newId, text: input, completed: false }]);

      //bütün işlemler tamamlandığında eklenen yazı siliniyor
      setInput("");
  }

  //tetiklendiğinde itemleri belirlenen item idsi olmadan filtreleyerek yeni bir obje olarak hafızada tutan fonksiyon.
  function removeItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  //render yapısı
  return (
    <div className="App">
      <img
        src="https://external-preview.redd.it/6DnS490tO60inX9pNneuikMgwBhMcEMk6qN4Zhe6wU0.jpg?auto=webp&s=6e5585a153ef072f0382eff7c06de7d103db826f"
        alt="recep ivedik 2 yapılacaklar listesi"
      />
      <h1 className="todos-text">todos</h1>
      <div className="notebookContainer">
        <div className="inputContainer">
          <input
            className="enterItemInput"
            value={input} //değeri çekebilmek ve fonksiyon tamamlandığında temizlenmesi için value tutuluyor
            onChange={(e) => setInput(e.target.value)} //valueyi değiştirmek için
            placeholder="Write your todo here"
          />
          <button onClick={(e) => addItem(input)}>Add</button>
        </div>
        <ToDoList items={items} setItems={setItems} removeItem={removeItem} />
        <Footer items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
