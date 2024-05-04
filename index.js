//  Question ______________ 97
function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());
    return `${day}-${month}-${year}`;
}
const formattedDate = getCurrentDate();
console.log(formattedDate); // Output: "04-05-2024"
// Question _____________ 98
// Get the current date
const currentDate = new Date();
// Get the next New Year's date
const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
// Calculate the difference in milliseconds
const differenceMs = nextNewYear.getTime() - currentDate.getTime();
// Convert milliseconds to days
const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
// Log the result
console.log(`There are ${daysLeft} days left until New Year.`);
// Question ____________ 99
// Get today's date
const today = new Date();
// Set the birthday month and day
const birthdayMonth = 8; // August (months are zero-indexed, so 8 represents September)
const birthdayDay = 15;
// Check if today's date is before or after the birthday in the current year
const birthdayThisYear = new Date(today.getFullYear(), birthdayMonth - 1, birthdayDay);
const isPastBirthday = today > birthdayThisYear;
// Set the year accordingly
const birthdayYear = isPastBirthday ? today.getFullYear() + 1 : today.getFullYear();
// Create the Date object for the next birthday
const nextBirthday = new Date(birthdayYear, birthdayMonth - 1, birthdayDay);
// Log the next birthday to the console
console.log(nextBirthday);
export {};
