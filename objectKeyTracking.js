function keyTracking(obj) {
  let res = [];
  function helper(object) {
    for (const key in object) {
      res.push(key);

      if (typeof object[key] === "object" && object[key] !== null) {
        helper(object[key]);
      }
    }
  }

  helper(obj);

  return res.join(".");
}

const obj = {
  a: {
    b: {
      c: {
        d: 10,
      },
    },
  },
};

const res = keyTracking(obj);
console.log(res);
