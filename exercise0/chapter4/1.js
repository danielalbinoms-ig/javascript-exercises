function fibonacci(num) {
    if (num <= 0) { return null; }
    if (num === 1 || num === 2) { return 1; }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
