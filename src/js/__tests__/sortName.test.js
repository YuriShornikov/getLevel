import sortHeroesByHealth from '../sortName.js';

test('sorts heroes by health', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
    ];

    const sortHeroes = sortHeroesByHealth(heroes);

    expect(sortHeroes).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
})
