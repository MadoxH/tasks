import { checkPassword } from "./password-checker";
import { expect, jest, test } from "@jest/globals";

test("Testing a string that is too short", () => {
    expect(checkPassword("abc1!")).toBe(false);
});

test("Testing a string with no number", () => {
    expect(checkPassword("aaaaabbbbbb!!!!!!!AAAAAGGGGG")).toBe(false);
});

test("Testing a string with no letter", () => {
    expect(checkPassword("1234567890!@#$%^&*")).toBe(false);
});

test("Testing a string with no special character", () => {
    expect(checkPassword("aaaaabbbbbbccccccc1234567890")).toBe(false);
});

test("Testing a string with all conditions", () => {
    expect(checkPassword("aaaaabbbbbb!!!!!!!1234567890!@#")).toBe(true);
});

test("Testing a string that starts with a special character", () => {
    expect(checkPassword("!aaaaabbbbbb!!!!!!!1234567890")).toBe(false);
});

test("Testing a string that starts with a number", () => {
    expect(checkPassword("1aaaaabbbbbb!!!!!!!1234567890")).toBe(false);
});
