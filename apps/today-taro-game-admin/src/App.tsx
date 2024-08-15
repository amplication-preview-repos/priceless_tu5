import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GameModeList } from "./gameMode/GameModeList";
import { GameModeCreate } from "./gameMode/GameModeCreate";
import { GameModeEdit } from "./gameMode/GameModeEdit";
import { GameModeShow } from "./gameMode/GameModeShow";
import { CardList } from "./card/CardList";
import { CardCreate } from "./card/CardCreate";
import { CardEdit } from "./card/CardEdit";
import { CardShow } from "./card/CardShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Today Taro Game"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GameMode"
          list={GameModeList}
          edit={GameModeEdit}
          create={GameModeCreate}
          show={GameModeShow}
        />
        <Resource
          name="Card"
          list={CardList}
          edit={CardEdit}
          create={CardCreate}
          show={CardShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
