import fs from 'fs';
import path from 'path';

import processSvgs from './process-svgs';

processSvgs(fs, path.resolve(__dirname, '../icons'));
