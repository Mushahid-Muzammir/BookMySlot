import { defineConfig } from 'vitest/config';

export default defineConfig({
    test:{
        environment:'jsdom',
        globals: true, //Globally imported testing utilities
        setupFiles: ['./tests/setup.ts'], //Setup file for global configurations
    }
});