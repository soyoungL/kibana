/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { createTestConfig } from '../common/config';

// eslint-disable-next-line import/no-default-export
export default createTestConfig({
  license: 'trial',
  name: 'X-Pack Observability API integration tests (trial)',
  testFiles: [require.resolve('./tests')],
});
