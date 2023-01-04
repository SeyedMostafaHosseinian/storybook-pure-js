export const Component1 = (options: {
    width: number,
    height: number,
    padding: number,
    borderRadius: number
    backgroundColor: string
    color: string
}) => {
    const componentElement = document.createElement('div') as HTMLDivElement
    componentElement.style.width = `${options.width}px`;
    componentElement.style.height = `${options.height}px`;
    componentElement.style.padding = `${options.padding}px`;
    componentElement.style.borderRadius = `${options.borderRadius}px`;
    componentElement.style.color = options.color;
    componentElement.style.backgroundColor = options.backgroundColor;
    return componentElement;
}
