window.dom = {
    find(node) {
        return document.querySelectorAll(node);
    },
    style(node, name, value) {
        if (arguments === 2) {
            if (typeof value === "string") {
                node.style[name] = value;
            } else if (name instanceof Object) {
                for (let i in value) {
                    node.style[key] = name[key]
                }
            }

        } else if (arguments === 3) {
            node.style[name] = value;
        }

    }
}