export function randomElementFromArray(arr: Array<any>) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}