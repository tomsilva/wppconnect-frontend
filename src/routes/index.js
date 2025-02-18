/*
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import SendMessagePage from "../pages/ChatPage";
import ScanNewSession from "../pages/LoginPage";
import ContactsPage from "../pages/Contacts";
import Sidebar from "../components/Sidebar";
import GroupPage from "../pages/GroupPage";
import { DrawerLeft, DrawerProvider } from "../components/Drawer";

const Routes = () => {
  return (
    <Switch>
      <>
        <Route exact path="/" component={ScanNewSession} />
        <Route path="/nova-sessao" component={ScanNewSession} />

        <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
          <DrawerProvider>
            <DrawerLeft menuContent={<Sidebar />}>
              <Route path="/chat" component={SendMessagePage} />
              <Route path="/contatos" component={ContactsPage} />
              <Route path="/grupo" component={GroupPage} />
            </DrawerLeft>
          </DrawerProvider>
        </div>
      </>
    </Switch>
  );
};

export default Routes;
