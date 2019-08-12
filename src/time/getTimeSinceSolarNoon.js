const sunriseAndSunsetBuilder = (
    sine,
    cosine,
    arccosine,
    getDeclinationOfTheSun,
) => {
    const timeSinceSolarNoon = (date, latitude, angle) => {
        const declinationOfTheSun = getDeclinationOfTheSun(date);
        const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
        const bottom = cosine(latitude) * cosine(declinationOfTheSun);
        return 0.06666666666 * arccosine(top / bottom);
    }

    return Object.freeze({
        timeSinceSolarNoon: (date, latitude, angle) => timeSinceSolarNoon(date, latitude, angle)
    });
};
