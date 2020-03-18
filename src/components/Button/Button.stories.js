import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
// import Pic from "../Icon/heartbtn.png";
// import Pic2 from "../Icon/cartBtn.png";

// const style = {
//     backgroundColor: '#0069D9',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: 'red'
// }

// const dangerStyle = {
//     backgroundColor: 'red',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: '#0069D9'
// }

// const successStyle = {
//     backgroundColor: 'green',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: 'green'
// }

// const warningStyle = {
//     backgroundColor: 'orange',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: 'orange'
// }

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)

  .add("Primary Cursor", () => (
    <Button label="Primary Cursor" type="primary" cursor />
  ))

  .add("Primary Outline", () => (
    <Button label="Primary Outline" type="primary" outline textFill />
  ))

  .add("Primary Muted", () => (
    <Button label="Primary Muted" type="primary" textFill muted />
  ))

  .add("Large Primary", () => (
    <Button label="Large Primary Button" type="primary" large />
  ))

  .add("Large Muted", () => (
    <Button label="Large Muted" type="primary" large muted textFill />
  ))

  .add("Large Outline", () => (
    <Button label="Large Outline" type="primary" large outline textFill />
  ))

  .add("Danger", () => <Button label="Danger" type="danger" />)

  .add("Large Danger", () => (
    <Button label="Large Danger Button" type="danger" large />
  ))
  .add("Success", () => (
    <Button
      label="Success"
      // style={successStyle}
      type="success"
    />
  ))
  .add("Warning", () => (
    <Button
      label="Warning"
      // style={warningStyle}
      type="warning"
    />
  ))

  .add("Default", () => (
    <Button
      label="Default"
      // style={warningStyle}
    />
  ));

// .add('Heart', () => <Button
//   label="Add To Favorites"
//   type="primary"
//   muted
//   textFill
//   icon
//   src={Pic}
//   />)
//   .add('Cart', () => <Button
//   label="Add To Cart"
//   type="primary"
//   muted
//   textFill
//   icon
//   src={Pic2}
//   />)
