const realConfirm = window.confirm;
const confirmFilters = [
    "Ihre Sitzung läuft in ",
    "Your session expires in "
];

window.confirm = message => {
    for (const index in confirmFilters) {
        if (message.startsWith(confirmFilters[index])) {
            return true;
        }
    }
    return realConfirm(message);
};
