import ButtonGroup from "../Buttons/ButtonGroup";

function WaterInputCard({ onUndoLastEntry, onAddWater, onReset }) {
    return (
        <section className="card water-input-card">
            <p className="card-label">Water Intake</p>

            <label htmlFor="waterAmount">Enter amount</label>

            <div className="input-wrapper">
                <input
                    id="waterAmount"
                    type="number"
                    placeholder="250"
                />

                <span>ml</span>
            </div>

            <ButtonGroup onUndoLastEntry={onUndoLastEntry} onAddWater={onAddWater} onReset={onReset} />
        </section>
    );
}

export default WaterInputCard;