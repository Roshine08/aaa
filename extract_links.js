const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('C:\\Users\\Gusta\\Downloads\\m77xkq2.xlsx');
const sheetName = 'General List';
const worksheet = workbook.Sheets[sheetName];

let db = JSON.parse(fs.readFileSync('accounts.json', 'utf8'));

let updatedCount = 0;

db.accounts.forEach(acc => {
    let rowNum = -1;
    for (let r = 1; r < 1000; r++) {
        let cellA = worksheet['A' + r];
        if (cellA && cellA.v == acc.id) {
            rowNum = r;
            break;
        }
    }

    if (rowNum !== -1) {
        // Screenshot is in column J (10th column)
        let cellJ = worksheet['J' + rowNum];
        if (cellJ) {
            if (cellJ.l && cellJ.l.Target) {
                acc.screenshot = cellJ.l.Target;
                updatedCount++;
            } else if (cellJ.f && cellJ.f.includes('HYPERLINK')) {
                const match = cellJ.f.match(/"(https?:\/\/[^"]+)"/);
                if (match && match[1]) {
                    acc.screenshot = match[1];
                    updatedCount++;
                }
            } else if (cellJ.v && typeof cellJ.v === 'string' && cellJ.v.startsWith('http')) {
                acc.screenshot = cellJ.v;
                updatedCount++;
            }
        }
    }
});

fs.writeFileSync('accounts.json', JSON.stringify(db, null, 2));
console.log('Successfully updated ' + updatedCount + ' accounts with Imgur links!');
