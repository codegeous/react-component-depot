import React, { useState } from "react";

const useVisiblityToggler = (component, visiblity = false) => {
    const [visible, setVisiblity] = useState(() => visiblity);

    return [visible ? component : null, () => setVisiblity((v) => !v)];
};

export default useVisiblityToggler;
