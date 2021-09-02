import { defineConfig } from 'dumi'

let base = '/WJ-UI';
let publicPath = '/WJ-UI/';

if (process.env.SITE_BUILD_ENV === 'DEV') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
    title:'WJ UI',
    mode:'site',
    outputPath: 'doc-site',
    exportStatic:{},
    dynamicImport:{},
    base,
    publicPath
})