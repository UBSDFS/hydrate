import ButtonGroup from "../Buttons/ButtonGroup";

function WaterInputCard({ inputValue, setInputValue, onUndoLastEntry, onAddWater, onReset }) {
    // keeps the input in sync with state, and blocks negative numbers
    const handleAmountChange = (e) => {
        const value = e.target.value;

        if (value === "" || Number(value) >= 0) {
            setInputValue(value);
        }
    };

    return (
        <section className="card water-input-card">
            <p className="card-label">Water Intake</p>

            <label htmlFor="waterAmount">Enter amount</label>

            <div className="input-wrapper">
                <input
                    id="waterAmount"
                    type="number"
                    placeholder="250"
                    value={inputValue} // controlled by state, not the DOM
                    onChange={handleAmountChange}
                />

                <span>ml</span>
            </div>

            {/* shows the current input value live, so we can screenshot the "result" */}
            <p className="entered-amount">You entered: {inputValue || 0} ml</p>

            <ButtonGroup onUndoLastEntry={onUndoLastEntry} onAddWater={onAddWater} onReset={onReset} />
        </section>
    );
}

export default WaterInputCard;
