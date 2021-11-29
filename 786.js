var kthSmallestPrimeFraction = function(arr, k) {
    const n = arr.length;
    const frac = [];
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            frac.push([arr[i], arr[j]]);
        }
    }
    frac.sort((x, y) => x[0] * y[1] - y[0] * x[1]);
    return frac[k - 1];
};