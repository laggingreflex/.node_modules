module.exports = (target, props) => new Proxy(target, {
  get: (target, key, recv) =>
    Reflect.get(props, key, recv)
    || Reflect.get(target, key, recv)
});