import { afterEach, expect, test, vi } from 'vitest';
import { t } from './index';

afterEach(() => {
  vi.restoreAllMocks();
});

test('loads the CLI entrypoint', async () => {
  const a = t();

  expect(a).toStrictEqual('Hello world');
});
