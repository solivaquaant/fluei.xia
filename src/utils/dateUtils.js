/**
 * Parses a date string in DD/MM/YYYY format.
 * @param {string} dateStr - The date string from config.json (e.g., "31/01/2026")
 * @returns {Date}
 */
export const parseDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== "string") return new Date(0);
  
  const parts = dateStr.split("/");
  if (parts.length !== 3) return new Date(dateStr); // Fallback to native if not DD/MM/YYYY
  
  const [day, month, year] = parts.map(Number);
  // Month is 0-indexed in JavaScript Date (0 = Jan, 11 = Dec)
  return new Date(year, month - 1, day);
};

/**
 * Gets the ordinal suffix for a day of the month.
 * @param {number} day 
 * @returns {string}
 */
const getOrdinal = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

/**
 * Formats a Date object to "MMM Do, YYYY" (e.g., "Jan 31st, 2026")
 * @param {Date} date 
 * @returns {string}
 */
export const formatDisplayDate = (date) => {
  if (!(date instanceof Date) || isNaN(date)) return "Invalid Date";
  
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const suffix = getOrdinal(day);
  
  return `${month} ${day}${suffix}, ${year}`;
};
