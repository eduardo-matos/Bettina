import { expect } from 'chai';
import { milliseconds, seconds, minutes, years, bettinas } from './index';

it('milliseconds', () => {
  expect(milliseconds(10)).to.equal(10);
});

it('seconds', () => {
  expect(seconds(10)).to.equal(10000);
});

it('minutes', () => {
  expect(minutes(5)).to.equal(1000 * 60 * 5);
});

it('years', () => {
  expect(years(1)).to.equal(Number('3.1536e10'));
});

it('bettinas', () => {
  expect(bettinas(years(3))).to.equal(1042000 - 1520);
});