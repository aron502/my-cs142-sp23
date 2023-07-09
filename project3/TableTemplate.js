"use strict";

// File: TableTemplate.js

// Simple template processor function
function TemplateProcessor(template, dictionary) {
    return template.replace(/\{\{(\w+)\}\}/g, function (_, key) {
        return dictionary[key] || "";
    });
}

class TableTemplate {
    static fillIn(id, dict, columnName) {
        const table = document.getElementById(id);
        const { rows } = table.tBodies[0];
        let colIndex = -1;

        const headers = rows[0].cells;
        for (let i = 0; i < headers.length; i++) {
            headers[i].textContent = TemplateProcessor(
                headers[i].textContent,
                dict
            );
            if (headers[i].textContent.indexOf(columnName) !== -1) {
                colIndex = i;
            }
        }

        for (let i = 1; i < rows.length; i++) {
            const { cells } = rows[i];
            for (let j = 0; j < cells.length; j++) {
                if (colIndex === -1 || j === colIndex) {
                    cells[j].textContent = TemplateProcessor(
                        cells[j].textContent,
                        dict
                    );
                }
            }
        }

        table.style.visibility = "visible";
    }
}
