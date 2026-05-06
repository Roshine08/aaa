require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// Serve static files from the current directory
app.use(express.static(__dirname));

const dbPath = path.resolve(__dirname, 'accounts.json');

// Helper to read JSON
function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { accounts: [] };
  }
}

// Helper to write JSON locally
function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
}

// GitHub Sync Helpers
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_FILE_PATH = 'accounts.json';

async function pushToGithub(dataObj) {
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) return;
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
  try {
    // 1. Get current file SHA
    const res = await fetch(url, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json' }
    });
    let sha = null;
    if (res.ok) {
      const fileData = await res.json();
      sha = fileData.sha;
    }
    
    // 2. Upload new file
    const content = Buffer.from(JSON.stringify(dataObj, null, 2)).toString('base64');
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: "Updated accounts.json via Discord Bot",
        content: content,
        sha: sha
      })
    });
    console.log("Successfully pushed accounts.json to GitHub!");
  } catch (error) {
    console.error("Failed to push to GitHub:", error);
  }
}

// Helper to write JSON locally AND push to GitHub
async function updateDB(data) {
  writeDB(data);
  await pushToGithub(data);
}

// --- DISCORD BOT ---
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`Discord Bot logged in as ${client.user.tag}`);
  console.log('Using accounts.json for database.');
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  function parseId(args) {
    if (args.length < 2) return null;
    return parseInt(args[1].replace(/^#/, ''), 10);
  }

  // Command: /add Price | Level | Highlights | Status
  if (message.content.startsWith('/add')) {
    const argsStr = message.content.replace('/add', '').trim();
    if (!argsStr) {
      return message.reply('Usage: `/add Price | Level | Highlights | Status`\nExample: `/add $50 | 25 | Genji Mythic | In Stock`');
    }

    const parts = argsStr.split('|').map(s => s.trim());
    const db = readDB();
    const newId = db.accounts.length > 0 ? Math.max(...db.accounts.map(a => a.id)) + 1 : 1;
    
    const newAcc = {
      id: newId,
      discord_id: null,
      level: parts[1] || 'N/A',
      access: 'Full Access',
      status: parts[3] || 'In Stock',
      highlights: parts[2] || 'N/A',
      weapons: '',
      balance: '',
      rank: '',
      nameChange: '',
      screenshot: '',
      price: parts[0] || 'TBD'
    };

    db.accounts.push(newAcc);
    updateDB(db);
    return message.reply(`✅ Added new account **#${newId}** (${newAcc.price}, Lvl ${newAcc.level}). Website updated!`);
  }

  // Command: /remove [id]
  else if (message.content.startsWith('/remove')) {
    const args = message.content.split(' ');
    const accountId = parseId(args);
    if (!accountId) return message.reply('Please provide an account ID. Example: `/remove 40`');

    const db = readDB();
    const initialLen = db.accounts.length;
    db.accounts = db.accounts.filter(a => a.id !== accountId);
    
    if (db.accounts.length === initialLen) {
      return message.reply(`❌ Account #${accountId} not found.`);
    }

    updateDB(db);
    return message.reply(`🗑️ Removed account **#${accountId}** from the database.`);
  }

  // Command: /setlink [id] [url]
  else if (message.content.startsWith('/setlink')) {
    const args = message.content.split(' ');
    const accountId = parseId(args);
    const url = args[2];
    
    if (!accountId || !url || !url.startsWith('http')) {
      return message.reply('Usage: `/setlink [id] [imgur_link]`\nExample: `/setlink 40 https://imgur.com/xyz`');
    }

    const db = readDB();
    const acc = db.accounts.find(a => a.id === accountId);
    if (!acc) return message.reply(`❌ Account #${accountId} not found.`);
    
    acc.screenshot = url;
    updateDB(db);
    return message.reply(`📸 Updated the "View Skins" Imgur link for Account **#${accountId}**! Website is updated.`);
  }

  // Command: /sold [#id] or /sold [id]
  else if (message.content.startsWith('/sold')) {
    const args = message.content.split(' ');
    const accountId = parseId(args);
    if (!accountId) return message.reply('Please provide an account ID. Example: `/sold #40` or `/sold 40`');
    
    const db = readDB();
    const acc = db.accounts.find(a => a.id === accountId);
    if (!acc) return message.reply(`❌ Account #${accountId} not found.`);
    
    acc.status = 'Sold';
    updateDB(db);
    message.reply(`✅ Account **#${accountId}** has been marked as **Sold**! The website is updated.`);
  }

  // Command: /pending [#id] or /pending [id]
  else if (message.content.startsWith('/pending')) {
    const args = message.content.split(' ');
    const accountId = parseId(args);
    if (!accountId) return message.reply('Please provide an account ID. Example: `/pending #40` or `/pending 40`');

    const db = readDB();
    const acc = db.accounts.find(a => a.id === accountId);
    if (!acc) return message.reply(`❌ Account #${accountId} not found.`);
    
    acc.status = 'Pending';
    updateDB(db);
    message.reply(`⏳ Account **#${accountId}** has been marked as **Pending**! The website is updated.`);
  }

  // Command: /instock [#id] or /instock [id]
  else if (message.content.startsWith('/instock')) {
    const args = message.content.split(' ');
    const accountId = parseId(args);
    if (!accountId) return message.reply('Please provide an account ID. Example: `/instock #40` or `/instock 40`');

    const db = readDB();
    const acc = db.accounts.find(a => a.id === accountId);
    if (!acc) return message.reply(`❌ Account #${accountId} not found.`);
    
    acc.status = 'In Stock';
    updateDB(db);
    message.reply(`🟢 Account **#${accountId}** has been marked as **In Stock**! The website is updated.`);
  }

  // Command: /list
  else if (message.content.startsWith('/list')) {
    const db = readDB();
    if (!db.accounts || db.accounts.length === 0) return message.reply(`No accounts found in the database.`);
    
    let listStr = "**All Accounts:**\n\n";
    db.accounts.forEach(acc => {
      let emoji = '🟢';
      if (acc.status.toLowerCase().includes('sold')) emoji = '🔴';
      if (acc.status.toLowerCase().includes('pending')) emoji = '⏳';
      
      listStr += `${emoji} **#${acc.id}** - ${acc.price} - Lvl ${acc.level} - ${acc.status}\n`;
    });
    
    // Split into chunks if too long for Discord (2000 chars)
    const chunks = listStr.match(/[\s\S]{1,1900}/g) || [];
    chunks.forEach(chunk => {
      message.reply(chunk);
    });
  }
});

if (process.env.DISCORD_TOKEN && process.env.DISCORD_TOKEN !== 'your_discord_bot_token_here') {
  try {
    client.login(process.env.DISCORD_TOKEN).catch(err => console.error("Discord Login Error:", err.message));
  } catch (e) {
    console.error("Invalid Discord Token format provided. The bot will not start.");
  }
} else {
  console.log('No DISCORD_TOKEN provided in .env file. Discord bot will not start.');
}

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`);
});
