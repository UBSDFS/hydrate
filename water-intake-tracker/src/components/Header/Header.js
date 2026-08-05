import today from "./HeaderDate"; // Import the current date formatted as "Weekday, Month Day, Year"

function Header() {
    return (
        <header className="app-header">
            <div>
                <p className="top title">Daily Hydration</p>
                <h1>Hydrate</h1>

                <p className="header-date">{today}</p>
            </div>


        </header>
    );
}

export default Header;