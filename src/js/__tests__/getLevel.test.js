import { getLevel } from '../getLevel.js';
import fetchData from '../http.js';

jest.mock('../http.js');

describe('getLevel', () => {
    test.each([
        ['someUserId', { status: 'ok', level: 50 }, 'Ваш текущий уровень: 50'],
        ['someUserId', { status: 'error' }, 'Информация об уровне временно недоступна']
    ])('fetchData result: %o', (userId, fetchDataResult, expected) => {
        fetchData.mockReturnValue(fetchDataResult);
        const result = getLevel(userId);
        expect(result).toBe(expected);
    });
});