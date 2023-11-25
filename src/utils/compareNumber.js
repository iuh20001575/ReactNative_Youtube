function compareNumber(number1, number2) {
    return number1 >= number2 - 0.01 && number1 <= number2 + 0.01;
}

export default compareNumber;
