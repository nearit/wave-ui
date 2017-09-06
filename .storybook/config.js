import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import '../src/style.css'

setAddon(infoAddon);

const req = require.context('../src', true, /.story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);
