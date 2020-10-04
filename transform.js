const fs = require('fs');
const path = require('path');
const { pipeline, Transform } = require('stream');
const caesarEngine = require('./caesarEngine');

const transform = (shift, action, input='', output='') => {
  const pathToRead = path.join(__dirname, input);
  const pathToWrite = path.join(__dirname, output);
  let input_stream, output_stream;

  if (input) {
    fs.access(pathToRead, fs.F_OK, (err) => {
      if (err) {
        process.stderr.write(`This file not exist for reading: ${pathToRead}`);
        process.exit(1);
      }
    })

    input_stream = fs.createReadStream(pathToRead, {encoding:'utf8'});
  } else {
    input_stream = process.stdin;
  }

  if (output) {
    try {
      if (!fs.existsSync(pathToWrite)) {
        process.stderr.write(`This file not exist for writing: ${pathToWrite}`);
        process.exit(1);
      }
    } catch(err) {
      console.error(err)
    }

    output_stream = fs.createWriteStream(pathToWrite, {flags: 'a'});
  } else {
    output_stream = process.stdout;
  }

  const transform_stream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(caesarEngine(chunk.toString(), shift, action));
      callback();
    }
  })

  pipeline(
    input_stream,
    transform_stream,
    output_stream,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
        process.exit(1);
      } else {
        console.log('Pipeline succeeded.');
        process.exit(0);
      }
    }
  )
}

module.exports = transform;
