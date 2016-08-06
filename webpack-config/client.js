import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  'context': join(__dirname, '../src/client'),

  'entry': { 'client.js': './index.js' },

  'output': { 'path': join(__dirname, '../dist/www') },

  'plugins': [
    new HtmlWebpackPlugin({ 'template': join(__dirname, '../src/client/index.html') })
  ]
}
