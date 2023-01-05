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
    exampleProperty1: {control: 'text', table: { category:"global"}},
    exampleProperty2: {control: 'text', table: { category:"global"}},
    exampleProperty3: {control: 'text', table: { category:"global"}},
    exampleProperty4: {control: 'text', table: { category:"global"}},
}
export const args = {
    globalArg1:"1",
}
