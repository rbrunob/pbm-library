export const toFormat = (value: string) => {
    const cleanedValue = value.replace(/\D/g, '');

    if (cleanedValue.length <= 11) {
        return cleanedValue
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }
};