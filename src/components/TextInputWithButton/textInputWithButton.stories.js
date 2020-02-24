import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInputWithButton from './textInputWithButton.js';


storiesOf('TextInputWithButton', module)
    .add('Default', () => <TextInputWithButton
         placeHolder="Voucher code"
         buttonLabel="Redeem"
         class="medium"
         buttClass="mediumButt"
         onClick={(arg) => alert(arg)}
      />)
    .add('Large', () => <TextInputWithButton
        placeHolder="Voucher code"
        buttonLabel="Redeem"
        class='larger'
        buttClass="largerButt"
        onClick
        onClick={(arg) => alert(arg)}
    />)