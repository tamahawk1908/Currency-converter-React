import Input from "./Input";
import Select from "./Select";

function App() {
  return (
    <><h1 className="header">Podręczny kantor</h1>
      <form className="form">
        <fieldset className="form__field">
          <legend className="form__legend">Kalkulator walut</legend>
          <div>
            Kwota*:
            <Input />
          </div>
          <div>Wybierz walutę:
            <Select />
          </div>
          <div>
            <button className="form__button button">Przelicz</button>
            <span className="form__result">N/A</span>
          </div>
          <p>
            Pole oznaczone * jest wymagane.
          </p>
          <p>
            Kurs z dnia: 09-11-2022
          </p>
        </fieldset>
      </form>
    </>
  );
}

export default App;
