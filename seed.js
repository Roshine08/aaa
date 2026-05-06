const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const db = require('./database');

const path = require('path');
const filePath = path.join(__dirname, 'assets', 'accounts.js');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  // Extract base64 string
  const match = content.match(/const ACCOUNTS_B64\s*=\s*['"](.*?)['"]/);
  
  if (match && match[1]) {
    const base64Str = match[1];
    const htmlString = Buffer.from(base64Str, 'base64').toString('utf8');
    
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;
    
    const rows = document.querySelectorAll('tr');
    console.log(`Found ${rows.length} rows to process.`);
    
    // Clear old table
    db.run('DELETE FROM accounts', (err) => {
      if (err) console.error(err);
      
      const stmt = db.prepare(`INSERT INTO accounts (id, level, access, status, highlights, weapons, balance, rank, nameChange, screenshot, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
      
      let count = 0;
      rows.forEach(tr => {
        const tds = tr.querySelectorAll('td');
        if (tds.length >= 11) {
          const id = tds[0].textContent.trim();
          if (isNaN(parseInt(id))) return; // skip header
          
          const level = tds[1].textContent.trim();
          const access = tds[2].textContent.trim();
          const status = tds[3].textContent.trim();
          const highlights = tds[4].innerHTML;
          const weapons = tds[5].innerHTML;
          const balance = tds[6].innerHTML;
          const rank = tds[7].innerHTML;
          const nameChange = tds[8].textContent.trim();
          
          let price = tds[10].textContent.trim();
          if (price && !price.toLowerCase().includes('dm') && !isNaN(parseFloat(price))) {
            price = "$" + price;
          }
          
          const a = tds[9].querySelector('a');
          const screenshot = a ? a.href : '';
          
          stmt.run(id, level, access, status, highlights, weapons, balance, rank, nameChange, screenshot, price);
          count++;
        }
      });
      
      stmt.finalize(() => {
        console.log(`Successfully seeded ${count} accounts into SQLite!`);
        db.close();
      });
    });
  } else {
    console.log("Could not extract ACCOUNTS_B64 from assets/accounts.js");
  }
} catch (e) {
  console.error("Error seeding database:", e);
}
