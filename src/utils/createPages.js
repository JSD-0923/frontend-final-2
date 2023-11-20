 const createPages = (inputArray, size) => {

    const chunkSize = size;

    const nestedArrays = [];
    for (let i = 0; i < inputArray.length; i += chunkSize) {
        nestedArrays.push(inputArray.slice(i, i + chunkSize));
    }

    return nestedArrays;
}
export default createPages