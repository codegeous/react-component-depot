import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <FontAwesomeIcon
            icon={visible ? "eye-slash" : "eye"}
            onClick={() => setVisiblity(visiblity => !visiblity)}
        />
    );

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
};

export default usePasswordToggle;
