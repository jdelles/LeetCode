const { map } = require("lodash");

const checkInclusion = (s1, s2) => {
    // Sliding window problem

    const s1Map = new Map();
    const s2Map = new Map();

    // O(m) ; m = s1.length
    for (let i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], s1Map.has(s1[i]) ? s1Map.get(s1[i]) + 1 : 1);
        s2Map.set(s2[i], s2Map.has(s2[i]) ? s2Map.get(s2[i]) + 1 : 1);
    }

    if (areMapsEqual(s1Map, s2Map)) return true;

    let left = 0;
    let right = s1.length;

    // sliding window  O(n) ; n = s2.length
    while (right < s2.length) {
        const leftValue = s2Map.get(s2[left]);
        leftValue === 1
            ? s2Map.delete(s2[left])
            : s2Map.set(s2[left], leftValue - 1);
        s2Map.set(
            s2[right],
            s2Map.has(s2[right]) ? s2Map.get(s2[right]) + 1 : 1
        );
        if (areMapsEqual(s1Map, s2Map)) return true;
        left++;
        right++;
    }

    return false;
};

const areMapsEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (let key of map1.keys()) {
        if (!map2.has(key)) return false;
        if (map2.get(key) !== map1.get(key)) return false;
    }
    return true;
};

module.exports = { checkInclusion, areMapsEqual };
