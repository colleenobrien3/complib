import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectInput from './selectInput';



storiesOf('SelectInput', module)
    .add('Select', () => <SelectInput
        label="Select"
        opt1="Dog"
        opt2="Cat"
        outline='outline'
   /> )
   .add('Select Med', () => <SelectInput
   label="Select"
   opt1="Dog"
   opt2="Cat"
   outline="outline"
   size="medium"
/> )
    .add('Select Large', () => <SelectInput
    label="Select"
    opt1="Dog"
    opt2="Cat"
    outline="outline"
    size="large"
    /> )

    .add('Select Fill', () => <SelectInput
    label="Select"
    opt1="Dog"
    opt2="Cat"
    background="background"
    /> )