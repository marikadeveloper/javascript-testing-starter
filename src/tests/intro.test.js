import {describe, test, it, expect} from "vitest"
import { calculateAverage, fizzBuzz, max } from "../intro"

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
})