export const storageService = {
    saveToStorage,
    loadFromStorage
}
function saveToStorage(key, val) {
    const json = JSON.stringify(val)
    localStorage.setItem(key, json)
}
function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val;
}