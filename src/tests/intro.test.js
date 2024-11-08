import {describe, test, it, expect} from "vitest"
import { max } from "../intro"

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