const digits = [
    '0Oo',
    '1Ii',
    '2',
    '3',
    '4',
    '5Ss',
    '6',
    '7',
    '8',
    '9',
    'Aa',
    'Bb',
    'Cc',
    'Dd',
    'Ee',
    'Ff',
    'Gg',
    'Hh',
    'Jj',
    'Kk',
    'Ll',
    'Mm',
    'Nn',
    'Pp',
    'Qq',
    'Rr',
    'Tt',
    'VvUu',
    'Ww',
    'Xx',
    'Yy',
    'Zz'
];
export function numberArrToBigInt(numberArr) {
    if (!(numberArr instanceof Uint32Array)) {
        numberArr = new Uint32Array(numberArr);
    }
    let bigInt = 0n;
    let offset = 0n;
    for (let i = numberArr.length - 1; i > -1; i--) {
        bigInt |= BigInt(numberArr[i]) << offset;
        offset += 32n;
    }
    return bigInt;
}
export function base32(numberArr) {
    const bigInt = numberArrToBigInt(numberArr);
    const binLength = numberArr.length * 32;
    let result = '';
    for (let offset = 0n; offset < binLength; offset += 5n) {
        const num = (bigInt & (31n << offset)) >> offset;
        result = digits[Number(num)][0] + result;
    }
    return result;
}
export default base32;
