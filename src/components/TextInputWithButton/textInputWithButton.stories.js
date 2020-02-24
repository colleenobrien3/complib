import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInputWithButton from './textInputWithButton.js';


storiesOf('TextInputWithButton', module)
    .add('Default', () => <TextInputWithButton
         placeHolder="Voucher code"
         buttonLabel="Redeem"
         class="medium"
         buttClass="mediumButt"
         onClick={(event) => alert(document.querySelector('#hi'))}
      />)
    .add('Large', () => <TextInputWithButton
        placeHolder="Voucher code"
        buttonLabel="Redeem"
        class='larger'
        buttClass="largerButt"
    
    />)