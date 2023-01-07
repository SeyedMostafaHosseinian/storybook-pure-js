import {ListsComponent} from "./Lists";
import {Component1} from "../Component1/Component1";
import Stories from "../Component1/Component1.stories"

//necessary story for Component1
import {Primary} from "../Component1/Component1.stories";


export default {
    argTypes: {
        itemsCount: {
            control: {type: 'range', min: 0, max: 100, step: 1},
            description: 'this is determines items count'
        },
        backgroundColor: {control: 'color'},
        justifyContent: {
            control: 'select',
            options: [
                'space-between',
                'space-around',
                'space-evenly',
                'start',
                'center',
                'end',
            ]
        },
        alignItems: {
            control: {
                type: 'select',
                options: [
                    'start',
                    'center',
                    'end',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ]
            }
        }
    },
    decorators: [
        (story) => {
            const decorator = document.createElement('div')
            decorator.style.paddingRight = '20px';
            decorator.appendChild(story())
            return decorator;
        }
    ],

}

const Template = (args) => {
    const ListElement = ListsComponent(args)
    for (let i: number = 0; i < args.itemsCount; i++) {
        ListElement.appendChild(Component1({...Primary.args, backgroundColor: '#1ee', color: '#fff'}))
    }
    return ListElement;
}

export const OneItem = Template.bind({})
OneItem.args = {
    itemsCount:1,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'start',
    padding:10,
    gap:5,
    backgroundColor: '#eee'
}
export const LowItems = Template.bind({})
LowItems.args = {
    itemsCount:3,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'start',
    padding:10,
    gap:5,
    backgroundColor: '#eee'
}
export const ManyItems = Template.bind({})
ManyItems.args = {
    itemsCount:23,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'start',
    padding:10,
    gap:5,
    backgroundColor: '#eee'
}
export const Empty = Template.bind({})
Empty.itemtCount = 0;
Empty.args = {
    padding: 25,
    backgroundColor:'#f8f8f8',
    borderRadius:5
}

