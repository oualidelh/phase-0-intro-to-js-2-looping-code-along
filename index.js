function writeCards(names) {
    const thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        thankYouMessages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return thankYouMessages;
}
function countDown(a) {
    for (let i = a; i >= 0; i--) {

        console.log(i);
    }
}
