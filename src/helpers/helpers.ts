export const period = (year: [number, number]): string => year[0] === year[1] ? String(year[0]) : `${year[0]} - ${year[1]}`
