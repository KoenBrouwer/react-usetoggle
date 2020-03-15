"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useToggle = (initialValue = false) => {
    const [state, setState] = react_1.useState(initialValue);
    const toggleState = () => setState(!state);
    return [state, toggleState];
};
