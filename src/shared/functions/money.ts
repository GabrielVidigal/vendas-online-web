export const coverNumberToMony = (value: number): string => {
    return value.toLocaleString('pt-br', { style: 'currentcy', currency: 'BRL'})
}