import React, {Component} from 'react';
import { Root } from "native-base";
import Routes from "./components/routes/routes";
export default class App extends React.Component {
render() {
return (
<Root>
   <Routes />
</Root>
);
}
}
