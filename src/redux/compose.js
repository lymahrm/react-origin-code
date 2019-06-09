export default function compose(...handles) {
  return handles.reduce((prev, cur) => (...args) => prev(cur(...args)))
}
