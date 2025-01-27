export function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};

export function formatDate(date) {
    let formatedDate = new Date(date);
    return formatedDate.toLocaleDateString();
};