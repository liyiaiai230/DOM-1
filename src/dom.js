window.dom = {
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, node) {
    parent.appendChild(node);
  },
  wrap(node, parent) {
    dom.before(node, parent);
    dom.appennd(parent, node);
  },
  remove(node) {
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerHTML = string;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.lenght === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        const objeck = name;
        for (let key in objeck) {
          node.style[key] = objeck[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(calssName);
    },
    remove(node, className) {
      node.classList.add(calssName);
    },
    has(node, className) {
      return document.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    node.addEvenListener(eventName, fn);
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selectotr);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n != node);
  },
  next(node) {
    let x = done.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nadeList, fn) {
    for (let i = 0; i < nodeList.lenght; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.lenght; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
