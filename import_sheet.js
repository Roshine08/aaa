const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Read the markdown content
let mdContent = fs.readFileSync('C:/Users/Gusta/.gemini/antigravity/brain/616918d6-8761-41ee-80a5-c3bc1b583fa3/.system_generated/steps/207/content.md', 'utf8');

// The CSV starts after the first "---"
const parts = mdContent.split('---');
let csvStr = parts.slice(1).join('---').trim();

// Parse CSV
const records = parse(csvStr, { skip_empty_lines: true, relax_column_count: true });

// The headers are at line 6 (index 5) in the records list based on the snippet.
// "No.", "Level OW1 + OW2", "Access", "Status", "Highlights", "Weapons Skins", "Balance/Wallet/Playtime", "Rank Status", "Name Change", "Screenshot", "Price USD"
let accounts = [];

let startIdx = 0;
for (let i = 0; i < records.length; i++) {
  if (records[i][0] === "No.") {
    startIdx = i + 1;
    break;
  }
}

for (let i = startIdx; i < records.length; i++) {
  const row = records[i];
  if (!row[0] || isNaN(parseInt(row[0]))) continue; // Skip non-account rows
  
  // Clean up formatting
  const id = parseInt(row[0]);
  const level = row[1] ? row[1].replace(/\n/g, ' ') : '';
  const access = row[2] ? row[2].replace(/\n/g, ' ') : '';
  const status = row[3] ? row[3].replace(/\n/g, ' ') : '';
  const highlights = row[4] ? row[4].replace(/\n/g, '<br>') : '';
  const weapons = row[5] ? row[5].replace(/\n/g, '<br>') : '';
  const balance = row[6] ? row[6].replace(/\n/g, '<br>') : '';
  const rank = row[7] ? row[7].replace(/\n/g, '<br>') : '';
  const nameChange = row[8] ? row[8].replace(/\n/g, ' ') : '';
  const screenshot = row[9] ? row[9] : '';
  const price = row[10] ? '$' + row[10].trim() : 'TBD';

  accounts.push({
    id,
    discord_id: null,
    level,
    access,
    status,
    highlights,
    weapons,
    balance,
    rank,
    nameChange,
    screenshot,
    price
  });
}

// Write to accounts.json
fs.writeFileSync('accounts.json', JSON.stringify({ accounts }, null, 2));
console.log('Successfully imported ' + accounts.length + ' accounts.');
