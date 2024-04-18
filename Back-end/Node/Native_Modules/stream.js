import fs from "node:fs"

const readableStream = fs.createReadStream('new_file.txt', { encoding: 'utf8' }); // Set encoding for text files

// reads from a file
readableStream.on('data', (chunk) => {
  console.log(chunk); // Process data chunk by chunk
});

readableStream.on('end', () => {
  console.log('Finished reading file');
});

readableStream.on('error', (error) => {
  console.error('Error reading file:', error);
});


// creates and write in a file 

const writableStream = fs.createWriteStream('new_file.txt');

writableStream.write('This is some data to write.\n');
writableStream.write('Adding more data...\n');

writableStream.end(() => {
  console.log('Finished writing file');
});

writableStream.on('error', (error) => {
  console.error('Error writing file:', error);
});