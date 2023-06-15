const openai = require('openai');

openai.api_key = "key";

function chatgpt(question, lang, format) {
  const response = openai.Completion.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a chatbot' },
      { role: 'system', content: `Answer in ${lang}` },
      { role: 'system', content: `Format in ${format}` },
      { role: 'user', content: `${question}` }
    ]
  });

  return response.choices[0].message.content;
}

function translate(text, toLang) {
  const response = openai.Completion.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a chatbot' },
      { role: 'system', content: `Answer in ${toLang}` },
      { role: 'system', content: `Format in ${format}` },
      { role: 'user', content: `Translate the following text to ${toLang}\n\n${text}` }
    ]
  });

  return response.choices[0].message.content;
}

const opList = ['quit', 'chatgpt', 'load', 'save', 'shell', 'translate', 'history'];

const user = process.argv[2] || 'user';
const lang = process.argv[3] || '繁體中文';
const format = process.argv[4] || 'Markdown+LaTex, add space before and after $..$';

console.log(`Welcome ${user} to shellgpt. You may use the following commands:`);
console.log('1. chatgpt <question>');
console.log('2. translate');
console.log('3. quit');

let response = null;
let question = null;
const commandList = [];

function processCommand(command) {
  const args = command.split(' ');
  const op = args[0];
  const tail = args.slice(1).join(' ');

  switch (op) {
    case 'chatgpt':
      question = tail;
      chatgpt(question, lang, format)
        .then((result) => {
          response = result;
          console.log(response);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
      break;
    case 'quit':
      process.exit();
      break;
    case 'translate':
      const toLang = args[1] || lang;
      translate(response, toLang)
        .then((result) => {
          response = result;
          console.log(response);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
      break;
    default:
      console.log(`Invalid command: ${op}`);
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const command = input.trim();
  console.log('');
  commandList.push(command);

  if (command === 'quit') {
    rl.close();
    return;
  }

  processCommand(command);
});

rl.on('close', () => {
  console.log('Exiting shellgpt...');
  process.exit(0);
});
