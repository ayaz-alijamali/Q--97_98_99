//  Question ______________ 97


function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const day: string = String(currentDate.getDate()).padStart(2, '0');
    const month: string = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year: string = String(currentDate.getFullYear());
    
    return `${day}-${month}-${year}`;
}

const formattedDate: string = getCurrentDate();
console.log(formattedDate); // Output: "04-05-2024"


// Question _____________ 98


// Get the current date
const currentDate: Date = new Date();

// Get the next New Year's date
const nextNewYear: Date = new Date(currentDate.getFullYear() + 1, 0, 1);

// Calculate the difference in milliseconds
const differenceMs: number = nextNewYear.getTime() - currentDate.getTime();

// Convert milliseconds to days
const daysLeft: number = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

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
