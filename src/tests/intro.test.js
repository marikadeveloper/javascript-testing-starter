import {describe, test, it, expect} from "vitest"
import { calculateAverage, factorial, fizzBuzz, max } from "../intro"

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // Arrange
        const a = 2
        const b = 1

        // Act
        const result = max(a, b)

        // Assert
        expect(result).toBe(2);
    })

    it('should return the second argument if it is greater', () => {
        // Arrange
        const a = 2
        const b = 3

        // Act
        const result = max(a, b)

        // Assert
        expect(result).toBe(3);
    })

    it('should return the first argument if they are equal', () => {
        // Arrange
        const a = 2
        const b = 2

        // Act
        const result = max(a, b)

        // Assert
        expect(result).toBe(2);
    })
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz if n is divisible by 3 and 5', () => {
        const n = 15

        const result = fizzBuzz(n)

        expect(result).toBe('FizzBuzz')
    })

    it('should return Fizz if n is only divisible by 3', () => {
        const n = 9

        const result = fizzBuzz(n)

        expect(result).toBe('Fizz')
    })

    it('should return Buzz if n is only divisible by 5', () => {
        const n = 5

        const result = fizzBuzz(n)

        expect(result).toBe('Buzz')
    })

    it('should return n as a string if n is not divisible by 5 or 3', () => {
        const n = 7

        const result = fizzBuzz(n)

        expect(result).toBe('7')
    })
})

describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        const arr = []

        const result = calculateAverage(arr)

        expect(result).toBeNaN()
    })

    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1)
    })

    it('should calculate the average of an array of two elements', () => {
        expect(calculateAverage([1,2])).toBe(1.5)
    })

    it('should calculate the average of an array of three elements', () => {
        expect(calculateAverage([1,2,3])).toBe(2)
    })
})

describe('factorial', () => {
    it('should return 1 if the number is 0', () => {
        expect(factorial(0)).toBe(1)
    })
    it('should return 1 if the number is 1', () => {
        expect(factorial(1)).toBe(1)
    })
    it('should return 2 if the number is 2', () => {
        expect(factorial(2)).toBe(2)
    })
    it('should return 6 if the number is 3', () => {
        expect(factorial(3)).toBe(6)
    })

    it('should return undefined if the nr is negative', () => {
        expect(factorial(-1)).toBeUndefined()
    })
})