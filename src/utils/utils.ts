const selectRandom = <T> (x: T[]): T | undefined => {
    return x[Math.floor(Math.random() * x.length)];
}


export { selectRandom }