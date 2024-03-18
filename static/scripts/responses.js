function getBotResponse(input) {
    //rock paper scissors
    if (input == "Як замовити товар") {
        return " paper paper paper paper paper";
    } else if (input == "Наші номери") {
        return "scissors scissors scissors scissors scissors";
    } else if (input == "Наша адреса") {
        return " rock rock rock rock rock";
    } else if (input == "Вибери один із варіантів") {
        return " Зробіть вибір";
    }

    


    if (input == "rock") {
        return "👋";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }


    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}