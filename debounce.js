function debounce(func, delay = 500) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId)

        let timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}