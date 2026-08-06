import ResetButton from "./ResetButton";

function ButtonGroup({ onAddWater, onUndoLastEntry, onReset }) {
    return (
        <section className="button-group">
            <button className="primary-button" type="button" onClick={onAddWater}>
                Add Water
            </button>

            <div className="secondary-button-row">
                <button
                    className="secondary-button"
                    type="button"
                    onClick={onUndoLastEntry}>
                    Undo Last Entry
                </button>
                
                <ResetButton onReset={onReset} />
            </div>
        </section>
    );
}

export default ButtonGroup;