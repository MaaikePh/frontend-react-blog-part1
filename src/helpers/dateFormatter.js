function dateFormatter(date) {

    const dutchDate = new Date(date);
    const formattedDate = dutchDate.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return formattedDate;
}

export default dateFormatter;