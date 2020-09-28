import React from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";
import {
  Logout16
} from '@carbon/icons-react'
import GalenImg from './logo.jpg'
import './index.css'

const App = () => (
  <div className="container">
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="">
      <img className="logo-width" src={GalenImg} alt="Logo" />
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Home</HeaderMenuItem>
        <HeaderMenuItem href="#">Add/Delete Questions</HeaderMenuItem>
        
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
        <Logout16 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);

export default App
