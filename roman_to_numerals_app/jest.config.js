module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.test.ts)$': '<rootDir>/__tests__/$1',
    },
};