import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './checkbox.js';

storiesOf('Checkbox', module)
    .add('Default', () => <Checkbox
         class='checked'
         message="Fuck off"
      />)

      .add('Blue', () => <Checkbox
      class='checkedBlue'
      message="Fuck off"
   />)