export const insertAt = (arr, index, value) => {
    console.log(arr, index);
    return [...arr.slice(0, index), value, ...arr.slice(index, arr.length)];
}

export const eraseAt = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index+1, arr.length)]
}