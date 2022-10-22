import cat from "./images/cat.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="hwrap">
        <div class="hmove">
          <div class="hitem">усатый любимец ведёт нас к победе</div>
          <div class="hitem">усатый любимец – светоч коммунизма</div>
          <div class="hitem">спасибо усатому любимцу за счастливое детство</div>
          <div class="hitem">усатый любимец – счастье народное</div>
          <div class="hitem">
            под водительством усатого любимца – вперёд к коммунизму!
          </div>
          <div class="hitem">
            Мы учимся так, чтобы усатый любимец «Отлично, ребята» сказал
          </div>
          <div class="hitem">
            под предводительством усатого любимца – вперёд к новому расцвету
            нашей родины
          </div>
        </div>
      </div>
      <img className="cat__image" src={cat} alt="cat" />
    </div>
  );
}

export default App;
