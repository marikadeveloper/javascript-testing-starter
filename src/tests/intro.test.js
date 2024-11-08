import {describe, test, it, expect} from "vitest"
import { fizzBuzz, max } from "../intro"

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

    it('should return Fizz if n is divisible by 3', () => {
        const n = 9

        const result = fizzBuzz(n)

        expect(result).toBe('Fizz')
    })

    it('should return Buzz if n is divisible by 5', () => {
        const n = 5

        const result = fizzBuzz(n)

        expect(result).toBe('Buzz')
    })
})