
import {
  chromeExtension,
} from 'rollup-plugin-chrome-extension'
 
export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    chromeExtension(),
  ],
}