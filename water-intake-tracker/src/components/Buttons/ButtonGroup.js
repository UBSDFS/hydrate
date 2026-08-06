function ButtonGroup({ onUndoLastEntry }) {
    return (
        <section className="button-group">
            <button className="primary-button" type="button">
                Add Water
            </button>

            <div className="secondary-button-row">
                <button
                    className="secondary-button"
                    type="button"
                    onClick={onUndoLastEntry}
                >
                    Undo Last Entry
                </button>

                <button className="reset-button" type="button">
                    Reset Day
                </button>
            </div>
        </section>
    );
}

export default ButtonGroup;