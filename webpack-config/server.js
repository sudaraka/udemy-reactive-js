import { join } from 'path'

export default {
  'target': 'node',
  'context': join(__dirname, '../src/server'),

  'entry': {
    'server.js': './cli.js',
    'observables.js': './observables.js',
    'from.js': './from.js',
    'builtin.js': './builtin.js'
  },

  'node': { '__dirname': false }
}
