const getData = () => {
  console.log("Hey ");
};
const debouncing = (fn, delay) => {
  let timer;
  return function () {
    const context = this,
      arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, document);
    }, delay);
  };
};
const betterFn = debouncing(getData, 300);
