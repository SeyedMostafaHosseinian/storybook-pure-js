import {Component1} from "./Component1";
import {Meta, Story} from "@storybook/html";

export default {
    title: "components/Component1",
    argTypes: {
        width: {
            control: {type: "range", min: 140, max: 600, step: 10},
            table: {
                category: 'size',
            }
        },
        height: {
            control: {type: "range", min: 80, max: 300, step: 10},
            table: {
                category: 'size',
            }
        },
        padding: {
            control: {type: "range", min: 0, max: 50, step: 5},
            description: 'the padding of the box',
            default: 10,
            table: {
                category: 'space',
            }
        },
        borderRadius: {
            control: {
                type: "select",
                options: [
                    5,
                    10,
                    20
                ],
            },
            defaultValue: 1,
            description: 'hello',
            table: {
                category: 'space'
            }
        },
        backgroundColor: {
            control: "color",
            table: {
                category: 'color'
            },

        },
        color: {
            control: "color",
            table: {
                category: 'color',
                // subcategory: "example-subcategory-color"
            }
        },
        title: {
            control: "text",
            table: {
                category: 'content'
            },
        },
        descriptions: {
            control: "text",
            table: {
                category: 'content'
            },
        },
        onClick: {
            action: 'onClick',

        }
    },
    parameters: {
        backgrounds: {
            values: [
                {name: 'red', value: '#f00'},
                {name: 'green', value: '#0f0'},
                {name: 'blue', value: '#00f'},
            ]
        }
    },
    decorators: [
        (story) => {
            const decorator = document.createElement('div')
            decorator.style.padding = '100px'
            decorator.appendChild(story())
            return decorator
        }
    ]
} as Meta<Component1>

const Template = (args) => Component1(args);

export const Primary = Template.bind({});
Primary.args = {
    width: 200,
    height: 100,
    backgroundColor: "#eee",
    color: "#333",
    padding: 15,
    borderRadius: 5,
    title: "component-1",
    descriptions: "this is the description from lorem",

};
Primary.parameters = {
    backgrounds: {
        values:[
            {name:'color1', value:'#eee'},
            {name:'color2', value:'#e2e'},
            {name:'color3', value:'#444'},
        ]
    }
}
Primary.argTypes = {
    color:{control:'color'}
}
