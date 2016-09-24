import { join } from 'path'

export default {
  'target': 'node',
  'context': join(__dirname, '../src/server'),

  'entry': {
    'server.js': './cli.js',
    'observables.js': './observables.js',
    'from.js': './from.js',
    'subjects.js': './subjects.js',
    'hot_cold.js': './hot_cold.js',
    'operators_1.js': './operators_1.js',
    'operators_2.js': './operators_2.js',
    'operators_3.js': './operators_3.js',
    'operators_4.js': './operators_4.js',
    'operators_5.js': './operators_5.js',
    'operators_6.js': './operators_6.js',
    'operators_7.js': './operators_7.js',
    'builtin.js': './builtin.js'
  },

  'node': { '__dirname': false }
}
