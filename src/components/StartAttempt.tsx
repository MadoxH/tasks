import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function decrementAttempts(): void {
        setAttempts(attempts - 1);
    }

    function incrementAttempts(): void {
        setAttempts(attempts + 1);
    }

    function toggleProgress(): void {
        if (!inProgress) {
            decrementAttempts();
        }
        setInProgress(!inProgress);
    }
    return (
        <div>
            <Button
                onClick={toggleProgress}
                disabled={inProgress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={toggleProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={incrementAttempts} disabled={inProgress}>
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
