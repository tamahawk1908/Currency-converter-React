import Input from "./Input";
import Select from "./Select";
import Submit from "./Submit";
import "./App.css";

function App() {
  return (
    <><h1 className="header">Podręczny kantor</h1>
      <form className="form">
        <fieldset className="form__field">
          <legend className="form__legend">
            Kalkulator walut
          </legend>
          <div>
            Kwota*:
            <Input />
          </div>
          <div>
            Wybierz walutę:
            <Select />
          </div>
            <Submit />
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
