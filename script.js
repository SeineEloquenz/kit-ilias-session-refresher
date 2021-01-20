const realConfirm = window.confirm;
const confirmFilters = [
    "Ihre Sitzung läuft in ",
    "Your session expires in "
];

window.confirm = message => {
    console.log("entered fake confirm")
    console.log(message)
    for (const index in confirmFilters) {
        console.log("loop element: " + confirmFilters[index])
        if (message.startsWith(confirmFilters[index])) {
            return true;
        }
    }
    return realConfirm(message);
};

console.log("custom window.confirm injected")
