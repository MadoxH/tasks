export function checkPassword(password: string): boolean {
    if (password.length < 16) {
        return false;
    }

    const specials = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/; //to test for special characters
    if (!specials.test(password)) {
        return false;
    }

    if (specials.test(password[0])) {
        return false;
    }

    const letters = /[a-zA-Z]/g; //to test for letters
    if (!letters.test(password)) {
        return false;
    }

    const numbers = /\d/; //to test for numbers
    if (!numbers.test(password)) {
        return false;
    }

    if (numbers.test(password[0])) {
        return false;
    }

    return true;
}
