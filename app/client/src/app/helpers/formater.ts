export default function toPrice(value: number): string {
    return `R$ ${value.toFixed(2)}`
}