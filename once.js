function once(fn) {
  let ranOnce = false;

  return function (...args) {
    if (ranOnce) return;

    ranOnce = true;

    return fn.apply(this, args);
  };
}

const hello = once(() => {
  console.log("heloo");
});

hello()
hello()
hello()
