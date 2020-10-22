module.exports = function check(str, bracketsConfig) {
    let newStr = bracketsConfig.map(item => item.join(''));

    for (let i = 0; i < newStr.length; i++) {
        if (str.includes(newStr[i])) {
            str = str.replace(newStr[i], '');
            i = -1;
        }
    }

    return (str.length === 0) ? true : false;
}
