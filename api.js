/**
 * @param {string} tagName
 * @param {object} attributes
 *@return {HTMLElement}
 */

export function createElementBy(tagName, attributes={}){
    const  element = document.createElement(tagName);
       for(const [attribute, value] of Object.entries(attributes)){
           element.setAttribute(attribute,value)
       }
       return element;
   }

export class MesTaches{
    #element;
    constructor(element){
        const tr= createElementBy('tr')
        const td= createElementBy('td')
        const div= createElementBy('div')
        const check= createElementBy('input',{
            type : 'checkbox'
        })
        const label= createElementBy('label')
        const div1= createElementBy('div')
        const bouton1=createElementBy('button',{
            id: 'image1'
        })
        bouton0.innerText='0'
        bouton1.innerText='0'
        const bouton0=createElementBy('button',{
            id: 'image'
        })
        div.append(check)
        div.append(label)
        div1.append(bouton1)
        div1.append(bouton0)
        td.append(div)
        td.append(div1)
        tr.append(td);
        element=tr;
        this.#element=element;
    }

}