import React from "react";

const PasswordStrengthIndicator = ({
    validity: { minChar, number, specialChar }
}) => {
    return (
        <div className="password-meter text-left mb-4">
            <p className="text-dark">Password must contain:</p>
            <ul className="text-muted">
                <PasswordStrengthIndicatorItem
                    isValid={minChar}
                    text="Have at least 8 characters"
                />
                <PasswordStrengthIndicatorItem
                    isValid={number}
                    text="Have at least 1 number"
                />
                <PasswordStrengthIndicatorItem
                    isValid={specialChar}
                    text="Have at least 1 special character"
                />
            </ul>
        </div>
    );
};

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
    const highlightClass = isValid
        ? "text-success"
        : isValid !== null
        ? "text-danger"
        : "";
    return <li className={highlightClass}>{text}</li>;
};

export default PasswordStrengthIndicator;
