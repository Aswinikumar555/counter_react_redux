

export const numberUp = (val) => {
    return {
        type: "AGE_UP",
        value: val
    }
};

export const numberDown = (val) => {
    return {
        type: "AGE_DOWN",
        value: val
    }
};


export const resetNumber = (val) => {
    return {
        type: "reset_Number",
        value: val
    }
};

export const addArticle = (val) => {
    return {
        type: "entered_Number",
        value: val
    }
};