export const required = (value) => {
    if(value) {
        return undefined;
    }

    return "Input can't be empty."
} 

export const maxLength = (maxLength) => (value) => {
    if(value.length > maxLength) {
        return `Max Length is ${maxLength} simbols!!`;
    }

    return undefined;
}