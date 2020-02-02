import React from "react";
import { Redirect } from "react-router-dom";
import {Foo, } from "./components/Pages";
import { Home } from "./views/Home"
import {ViewFormSurvey} from "./views/ViewFormSurvey";

// Layout Types
// import { DefaultLayout } from "./layouts";



export default [
  {
    path: "/",
    exact: true,
   // layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },

  {
    path: "/home",
 //   layout: DefaultLayout,
    component: Home
  },

  {
    path: "/formSurvey",
    //   layout: DefaultLayout,
    component: ViewFormSurvey
  },

  {
    path: "/foo",
//    layout: DefaultLayout,
    component: Foo
  }

];
