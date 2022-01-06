const { checkInclusion, areMapsEqual } = require("./check_inclusion");

/** base map */
const map1 = new Map([
    ["a", 1],
    ["b", 2],
]);

/** equal to base map */
const map2 = new Map([
    ["a", 1],
    ["b", 2],
]);

/** differs from base map // key c instead of b */
const map3 = new Map([
    ["a", 1],
    ["c", 2],
]);

/** differs from base map // value b = 1 instead of b = 2 */
const map4 = new Map([
    ["a", 1],
    ["b", 1],
]);

/** differs from base map // size 3 instead of size 2 */
const map5 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 2],
]);

/**
 * Test if maps are equal - should be true
 */
test("areMapsEqual True", () => {
    expect(areMapsEqual(map1, map2)).toBeTruthy();
});

/**
 * Test if maps are equal - should be false, different keys in maps
 */
test("areMapsEqual False - different keys", () => {
    expect(areMapsEqual(map1, map3)).toBeFalsy();
});

/**
 * Test if maps are equal - should be false, different values in maps
 */
test("areMapsEqual False - different values", () => {
    expect(areMapsEqual(map1, map4)).toBeFalsy();
});

/**
 * Test if maps are equal - should be false, different size maps
 */
test("areMapsEqual False - different size", () => {
    expect(areMapsEqual(map1, map5)).toBeFalsy();
});

const s1 = "ab";

const s2 = "ba";

const s3 = "cbac";

const s4 = "cbca";

/**
 * Test checkInclusion - should be true
 */
test("checkInclusion True", () => {
    expect(checkInclusion(s1, s2)).toBeTruthy();
});

/**
 * Test checkInclusion - should be true
 */
test("checkInclusion True", () => {
    expect(checkInclusion(s1, s3)).toBeTruthy();
});

/**
 * Test checkInclusion - should be false
 */
test("checkInclusion False", () => {
    expect(checkInclusion(s1, s4)).toBeFalsy();
});
