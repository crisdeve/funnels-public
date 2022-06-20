import {
  Page
} from "@shopify/polaris";
import React from "react";
import { MyContextProvider, myContext } from "../context/myContext";
import { User } from "./user";

export function HomePage() {

  return (
    <MyContextProvider>
      <Page fullWidth>
        <myContext.Consumer>
          {({user, setUser}) => (
            <>
              <div>{user}</div>
              <button
                onClick={() => setUser('Diana')}
              >
                Change to Diana
              </button>
            </>
          )}
        </myContext.Consumer>
        
        <User />
      </Page>
    </MyContextProvider>
  );
}
