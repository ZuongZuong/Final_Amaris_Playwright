import { format, addDays } from 'date-fns';
import { getDateWithOptions } from 'date-fns/fp';

export class DateUtils {

    static getDateWithOffset(days = 0) {
        const date = new Date();

        // plus or minus days
        date.setDate(date.getDate() + days);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    static getMonthName(monthNumber: number) {
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        return months[Number(monthNumber) - 1];

    }

    static getMonthNumber(monthName: string) {
        const months = [
            "january", "february", "march", "april",
            "may", "june", "july", "august",
            "september", "october", "november", "december"
        ];

        return months.indexOf(monthName.toLowerCase()) + 1;
    }

    static convertDateFormat(dateStr: string) {
        const [day, month, year] = dateStr.split('/');

        return `${year}-${month}-${day}`;
    }
}
