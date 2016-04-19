import { copy } from 'fs-extra';
import glob from 'glob';
import * as config from '../config';

export default function prepublishSass() {
  glob.sync(`${config.paths.axiomSass}/**/*.scss`).forEach((file) => {
    copy(file, `${config.paths.output}${file.split(config.paths.axiom)[1]}`)
  });
}