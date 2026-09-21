export function getRandomQuery(): string {
    const randomNum =  Math.floor(Math.random() * (9999 - 10 + 1) + 10 )
    return randomNum.toString()
}