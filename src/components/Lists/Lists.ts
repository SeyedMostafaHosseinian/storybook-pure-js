export const ListsComponent = (args: {
    padding?: number,
    justifyContent?: string,
    alignItems?: string,
    borderRadius?: number,
    backgroundColor?: string,
    gap?: number,
    itemsCount?: number
}) => {
    const ListsElement = document.createElement('div')
    ListsElement.setAttribute('style', `
        width:100%;
        display:flex;
        flex-wrap:wrap;
        padding:${args.padding}px;
        justify-content:${args.justifyContent};
        align-items:${args.alignItems};
        gap:${args.gap}px;
        background-color:${args.backgroundColor};
        border-radius:${args.borderRadius}px;
    `)
    return ListsElement
}
