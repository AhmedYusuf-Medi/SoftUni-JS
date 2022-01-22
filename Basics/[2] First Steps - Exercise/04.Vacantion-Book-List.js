function VacationBooksList(input) {
    let totalBookPages = Number(input[0]);
    let readingPagesPerOneHour = Number(input[1]);
    let totalDaysToRead = Number(input[2]);

    let totalTimeNeededToReadTheBook = (totalBookPages / readingPagesPerOneHour) / totalDaysToRead;

    console.log(`${totalTimeNeededToReadTheBook}`);
}
VacationBooksList(["214", "20", "3"]);
VacationBooksList(["439", "15", "7"]);