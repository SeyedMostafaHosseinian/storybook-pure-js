export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },

}

export const argTypes = {
    exampleGlobalProperty1: {control: 'text', table: { category:"global"}},
    exampleGlobalProperty2: {control: 'text', table: { category:"global"}},
    exampleGlobalProperty3: {control: 'text', table: { category:"global"}},
    exampleGlobalProperty4: {control: 'text', table: { category:"global"}},
}
export const args = {
    globalArg1:"1",
}
