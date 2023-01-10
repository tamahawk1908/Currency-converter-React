const Input = () => (
    <input
        className="form__amount"
        placeholder="(PLN)Polski Złoty"
        type="number"
        name="amount"
        min="0"
        step="0.01"
        autoFocus />
);

export default Input;