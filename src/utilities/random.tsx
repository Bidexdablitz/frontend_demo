export function randInt(stop: number, start: number = 0): number {
    return Math.floor(Math.random() * stop + start);
}

export function randListItem(list: any[]) {
    return list[randInt(list.length - 1)];
}
