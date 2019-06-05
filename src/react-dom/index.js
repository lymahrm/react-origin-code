const render = function(VNode, container) {
  if (typeof VNode == 'string') {
    const text = document.createTextNode(VNode)
    return container.appendChild(text)
  }

  const { type, props, children } = VNode
  const el = document.createElement(type)
  for (const key in props) {
    if (!key.startsWith('__')) {
      el.setAttribute(key, props[key])
    }
  }
  children.forEach(item => {
    render(item, el)
  })
  container.appendChild(el)
}

export { render }
