import { functionExpression } from '@babel/types';

function sum(a: number, b: number) {
  const result = a + b;
  return result;
}

test('adds 1 + 2 to equal 3', function () {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 4 to equal 7', function () {
  expect(sum(3, 4)).toBe(8);
});

function test(title: string, callback: () => void) {
  try {
    callback();
    console.log(`☑ ${title}`);
  } catch (error) {
    console.error(`× ${title}`);
    console.error(error);
  }
}

// eslint-disable-next-line
export {};
