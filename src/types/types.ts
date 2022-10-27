export interface IPlaceMark {
    id: string
    title: string
    source: string
    geometry: [number, number]
    direction: number
    img: {
        small: string
        full: string
    }
    year: [number, number]
}
