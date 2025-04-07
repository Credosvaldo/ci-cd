import { describe, expect, it } from "vitest";
import { calculate } from "../helper";

describe("Helper test", () => {
  describe("calculate", () => {
    it("get option 'Obesidade grau III'", () => {
        const result = calculate(175, 2)
        expect(result).equal("Obesidade grau III")
    })

    it("get option 'Abaixo do peso'", () => {
        const result = calculate(70, 2)
        expect(result).equal("Abaixo do peso")
    })

    it("get option 'Peso normal'", () => {
        const result = calculate(75, 1.75)
        expect(result).equal("Peso normal2") // tem um dois a mais aqui
    })

  });
});
