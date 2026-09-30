import { describe, it, expect } from 'vitest';
import { Store, SortedStore } from '../src/Store.js';

describe('Part 2: Store and SortedStore', () => {
  it('adds items and calculates total sum', () => {
    const store = new Store();
    store.add(Store.createItem('Espresso', 900, 2));
    store.add(Store.createItem('Croissant', 1200, 1));

    expect(store.count).toBe(2);
    expect(store.total()).toBe(3000);
  });

  it('removes item by name', () => {
    const store = new Store();
    store.add({ name: 'Latte', price: 1400, qty: 1 });
    const removed = store.remove('Latte');

    expect(removed).toBe(true);
    expect(store.count).toBe(0);
    expect(store.find('Latte')).toBeNull();
  });

  it('handles edge case: zero items or empty initial store', () => {
    const store = new Store();
    expect(store.total()).toBe(0);
    expect(store.find('NonExistent')).toBeNull();
  });

  it('throws error when adding invalid item structure', () => {
    const store = new Store();
    expect(() => store.add({ name: 'Invalid', price: -100, qty: 1 })).toThrow(RangeError);
  });

  it('SortedStore inherits Store and overrides total using super', () => {
    const sortedStore = new SortedStore();
    sortedStore.add({ name: 'Raf', price: 1800.555, qty: 2 });

    expect(sortedStore instanceof Store).toBe(true);
    expect(sortedStore.total()).toBe(3601.11);
  });

  it('SortedStore sorts items by name alphabetically', () => {
    const sortedStore = new SortedStore();
    sortedStore.add({ name: 'Tea', price: 500, qty: 1 });
    sortedStore.add({ name: 'Americano', price: 800, qty: 1 });

    const sorted = sortedStore.getSortedByName();
    expect(sorted[0].name).toBe('Americano');
    expect(sorted[1].name).toBe('Tea');
  });
});
