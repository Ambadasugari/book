function primeInRange(start, end) {
    function prime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = start; i <= end; i++) {
        if (prime(i)) {
            console.log(i);
        }
    }
}
primeInRange(47, 97);