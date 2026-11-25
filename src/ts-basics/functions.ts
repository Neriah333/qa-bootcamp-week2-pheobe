function myAge(name: string, age: number): string {
    if (age < 18) {
        return `${name} is a minor.`;
    }
    return `${name} is not a minor.`;
}

console.log(myAge("John Doe", 20));