function classNames(...args) {
    let arr = [];

    function helper(args) {
        if (!args) return;

        if (typeof args === "string" || typeof args === "number") {
            arr.push(args);
        }

        if (Array.isArray(args)) {
            for (let i = 0; i < args.length; i++) {
                helper(args[i]);
            }
            return;
        }

        if (typeof args === "object") {
            for (const key in args) {
                if (args[key]) {
                    arr.push(key);
                }
            }
        }
    }

    helper(args);

    return arr.join(" ");
}

const res = classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "");

// const res = classNames(
//     "foo",
//     {
//         bar: true,
//         duck: false,
//     },
//     "baz",
//     { quux: true },
// ); // 'foo bar baz quux'

console.log(res);
