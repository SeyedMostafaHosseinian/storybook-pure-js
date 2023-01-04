export const Component1 = (options: {
    width?: number,
    height?: number,
    padding?: number,
    borderRadius?: number
    backgroundColor?: string
    color?: string,
    title?: string,
    descriptions?: string,
    onClick
}) => {
    const componentElement = document.createElement('div') as HTMLDivElement;
    componentElement.innerHTML = `
       <h4>${options.title}</h4>
       <p>${options.descriptions}</p>
    `

    componentElement.setAttribute('style', `
        width:${options.width}px;
        height:${options.width}px;
        background-color:${options.backgroundColor};
        padding:${options.padding}px;
        border-radius:${options.borderRadius}px;
        color:${options.color};
        `)
    componentElement.addEventListener('click', options.onClick)
    return componentElement;
}
