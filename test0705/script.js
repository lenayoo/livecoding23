// Question 1
// Create a function that outputs leap years from 0 to 2020.
// The conditions for a leap year are as follows.
// - Years divisible by 4 are in principle leap years
// - However, years that are divisible by 100 are not leap years in principle
// - However, years divisible by 400 are leap years

// problem 2
// Create a function that outputs prime numbers between 1 and 1000.
// The definition of a prime number is as follows.
// A prime number is a natural number greater than 1 whose divisors are 1 and itself only.
// *Using the library is prohibited.

// problem 3
// I created a program that outputs numbers from 0 to 9999 in increments of 1.
// How many times does the number 7 appear when you run this program?
// For example, if 7777 is printed, the number 7 counts as being printed 4 times.
// Give the answer to this question or a program to calculate the answer.

// 1
function findLeapYears() {
  const leapYears = []
  for (let year = 0; year <= 2020; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears.push(year)
    }
  }
  return leapYears
}

const leapYears = findLeapYears()
console.log(leapYears)

// 2
function isPrime(number) {
  if (number <= 1) {
    return false
  }
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false
    }
  }
  return true
}

function findPrimeNumbers() {
  const primeNumbers = []
  for (let number = 1; number <= 1000; number++) {
    if (isPrime(number)) {
      primeNumbers.push(number)
    }
  }
  return primeNumbers
}

const primeNumbers = findPrimeNumbers()
console.log(primeNumbers)

// 3
function countNumberSeven() {
  let count = 0
  for (let number = 0; number <= 9999; number++) {
    const digits = number.toString().split('')
    for (let digit of digits) {
      if (digit === '7') {
        count++
      }
    }
  }
  return count
}

const numberOfSevens = countNumberSeven()
console.log(numberOfSevens)
