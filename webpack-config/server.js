import { join } from 'path'

export default {
  'target': 'node',
  'context': join(__dirname, '../src/server'),

  'entry': { 'server.js': './cli.js' },

  'node': { '__dirname': false }
}
