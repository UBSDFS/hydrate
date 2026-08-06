import ButtonGroup from "../Buttons/ButtonGroup";

<<<<<<< HEAD
function WaterInputCard({ onUndoLastEntry, onAddWater, onReset }) {
=======
function WaterInputCard({ inputValue, setInputValue, onUndoLastEntry, onAddWater, onReset }) {
>>>>>>> de04d6c (connect water input to progress bar)
    return (
        <section className="card water-input-card">
            <p className="card-label">Water Intake</p>

            <label htmlFor="waterAmount">Enter amount</label>

            <div className="input-wrapper">
                <input
                    id="waterAmount"
                    type="number"
                    placeholder="250"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                />

                <span>ml</span>
            </div>

            <ButtonGroup onUndoLastEntry={onUndoLastEntry} onAddWater={onAddWater} onReset={onReset} />
        </section>
    );
}

export default WaterInputCard;