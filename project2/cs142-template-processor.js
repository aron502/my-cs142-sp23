"use strict";

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
    let output = this.template;

    const regex = /\{\{(\w+)\}\}/g;
    const matches = this.template.match(regex) || [];

    matches.forEach((match) => {
        const property = match.slice(2, -2);
        const value = dictionary[property];

        output = output.replace(match, value !== undefined ? value : "");
    });

    return output;
};
