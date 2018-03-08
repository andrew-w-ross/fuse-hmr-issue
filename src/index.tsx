import * as React from 'react';
import { render } from 'react-dom';

import { App } from './App';

render(<App /> as any, document.getElementById('content'));
