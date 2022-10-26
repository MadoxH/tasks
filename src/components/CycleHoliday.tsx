import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");

    const nextChronologically: Record<string, string> = {
        // eslint-disable-next-line prettier/prettier
        Halloween: "Thanksgiving Day",
        "Groundhog Day": "Burning Man",
        "Labour Day": "Halloween",
        "Burning Man": "Labour Day",
        "Thanksgiving Day": "Groundhog Day"
    };

    function changeChronologically(): void {
        const next = nextChronologically[holiday];
        setHoliday(next);
    }

    const nextAlphabetically: Record<string, string> = {
        "Burning Man": "Groundhog Day",
        "Groundhog Day": "Halloween",
        // eslint-disable-next-line prettier/prettier
        Halloween: "Labour Day",
        "Labour Day": "Thanksgiving Day",
        "Thanksgiving Day": "Burning Man"
    };

    function changeAlphabetically(): void {
        const next = nextAlphabetically[holiday];
        setHoliday(next);
    }

    const matchingEmoji: Record<string, string> = {
        "Burning Man": "🔥",
        "Groundhog Day": "🐿",
        // eslint-disable-next-line prettier/prettier
        Halloween: "🎃",
        "Labour Day": "🛠",
        "Thanksgiving Day": "🦃"
    };

    const display = "Holiday: " + matchingEmoji[holiday];

    return (
        <div>
            <Button onClick={changeChronologically}>Next in Year</Button>
            <Button onClick={changeAlphabetically}>Next in Alphabet</Button>
            {display}
        </div>
    );
}
