import { expect } from 'chai';
import { milliseconds, seconds, minutes } from './index';

it('milliseconds', () => {
  expect(milliseconds(10)).to.equal(10);
});

it('seconds', () => {
  expect(seconds(10)).to.equal(10000);
});

it('minutes', () => {
  expect(minutes(5)).to.equal(1000 * 60 * 5);
});