"use strict";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const day_names = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function get_days_in_month(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function get_first_of_month(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }

    render(date) {
        this.selected_date = date;
        const container = document.getElementById(this.id);

        let calendar = `<div class="datepicker">
                          <div class="month">
                          <span class="month-year">${
                              monthNames[date.getMonth()]
                          } ${date.getFullYear()}</span>
                            <button class="prev" onclick="datePicker1.render(new Date(datePicker1.selected_date.setMonth(datePicker1.selected_date.getMonth() - 1)))">&#10094;</button>
                            <button class="next" onclick="datePicker1.render(new Date(datePicker1.selected_date.setMonth(datePicker1.selected_date.getMonth() + 1)))">&#10095;</button>
                          </div>
                          <div class="weekdays">`;
        day_names.forEach((day) => {
            calendar += `<div>${day}</div>`;
        });

        calendar += '</div><div class="days">';
        let days_in_month = get_days_in_month(
            date.getMonth(),
            date.getFullYear()
        );
        const firstday = get_first_of_month(date);

        const prev_month_days = get_days_in_month(
            (date.getMonth() - 1 + 12) % 12,
            date.getFullYear()
        );
        for (let i = 0; i < firstday; ++i) {
            calendar += `<div class="day other-month">${
                prev_month_days - firstday + i + 1
            }</div>`;
        }

        for (let i = 1; i <= days_in_month; ++i) {
            calendar += `<div class="day" onclick="datePicker1.callback('${
                this.id
            }', {day: ${i}, month: ${
                date.getMonth() + 1
            }, year: ${date.getFullYear()}})">${i}</div>`;
        }

        let next_month_days = 1;
        while ((firstday + days_in_month) % 7 !== 0) {
            calendar += `<div class="day other-month">${next_month_days++}</div>`;
            ++days_in_month;
        }

        calendar += "</div></div>";
        container.innerHTML = calendar;
    }
}

window.DatePicker = DatePicker;
