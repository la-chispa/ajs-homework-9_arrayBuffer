import ArrayBufferConverter from '../app';
import getBuffer from '../buffer';

test('method load()', () => {
  const buffer = new ArrayBufferConverter(getBuffer());
  buffer.load();
  expect(buffer.bufferView.length).toBe(53);
});

test('method toString()', () => {
  const buffer = new ArrayBufferConverter(getBuffer());
  buffer.load();
  buffer.toString();
  expect(buffer.string).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('with another data from buffer', () => {
  const data = new ArrayBufferConverter(new Uint16Array([83, 79, 83]));
  data.load();
  data.toString();
  expect(data.string).toBe('SOS');
});
