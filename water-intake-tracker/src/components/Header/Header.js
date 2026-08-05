import today from "./HeaderDate";

function Header() {
    return (
        <header className="app-header">
            <div>
                <p className="header-subtitle">Daily Hydration</p>

                <h1>Hydrate</h1>

                <p className="header-date">{today}</p>
            </div>
        </header>
    );
}

export default Header;