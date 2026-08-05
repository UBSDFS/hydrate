
//Ulysses - Returns the current date formatted as "Weekday, Month Day, Year"
const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

export default today;