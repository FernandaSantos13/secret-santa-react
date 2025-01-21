const shuffle = (input: string[]) => {
    const result = [...input];

    for (let i = 0; i < result.length; i++) {
        const j = Math.floor(Math.random() * result.length);
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result;

};

export default shuffle;