import ErrorRepository from "../errorRepository.js";

test ('Проверяю добавление новой ошибки', () => {
    const errorRepository = new ErrorRepository();
    errorRepository.addError('404', 'Not found');
    expect(errorRepository.translate('404')).toBe('Not found');
});

test ('Проверяю добавление ошибки без описания', () => {
    const errorRepository = new ErrorRepository();
    errorRepository.addError('404');
    expect(errorRepository.translate('404')).toBe('Unknown error');
});

test ('Проверяю запрос несуществующей ошибки', () => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate('404')).toBe(undefined);
})
