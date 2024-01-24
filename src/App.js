import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import ArrayInvertContainer from './features/Tasks/ArrayInvert/ArrayInvertContainer';
import AssetDetailsContainer from "./features/Tasks/AssetDetails/AssetDetailsContainer";
import BinaryIntContainer from './features/Tasks/BinaryInt/BinaryIntContainer';
import CaesarChiffreContainer from './features/Tasks/CeasarChiffe/CaesarChiffreContainer';
import DaysToAgeContainer from "./features/Tasks/DaysToAge/DaysToAgeContainer";
import HomeContainer from "./features/Home/HomeContainer";
import InvertStringContainer from './features/Tasks/InvertString/InvertStringContainer';
import NumberToInvertedArrayContainer from "./features/Tasks/NumberToInvertedArray/NumberToInvertedArrayContainer";

import history from './history';
import routes from "./routes";
import store from "./redux/stores";

import Styles from './App.module.css';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className={Styles.app}>
          <Switch>
            <Route
              component={ArrayInvertContainer}
              name="ArrayInverter"
              path={routes.Tasks.arrayInverter}
            />
            <Route
              component={BinaryIntContainer}
              name="NumberBases"
              path={routes.Tasks.numberBases}
            />
            <Route
              component={InvertStringContainer}
              name="StringInverter"
              path={routes.Tasks.stringInverter}
            />
            <Route
              component={DaysToAgeContainer}
              name="DaysToAge"
              path={routes.Tasks.daysToAge}
            />
            <Route
              component={CaesarChiffreContainer}
              name="CeasarChiffe"
              path={routes.Tasks.ceasarChiffre}
            />
            <Route
              component={NumberToInvertedArrayContainer}
              name="NumberToInt"
              path={routes.Tasks.numberToInvertedArray}
            />
            <Route
              name="AssetDetails"
              path={routes.Tasks.assetDetails}
            >
              <AssetDetailsContainer />
            </Route>
            <Route
              name="Home"
              path={routes.Home}
            >
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
