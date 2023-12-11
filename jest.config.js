module.exports = {
    preset: 'ts-jest',
    tetsEnvironment : 'jsdom',
    setupFileAfterEnv: ['<rootDir>/setupTests.ts'],
};