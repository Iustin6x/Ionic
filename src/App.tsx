import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { StudentEdit, StudentList } from './todo';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { StudentProvider } from './todo/StudentProvider';

const App: React.FC = () => (
    <IonApp>
        <StudentProvider>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/students" component={StudentList} exact={true} />
                    <Route path="/student" component={StudentEdit} exact={true} />
                    <Route path="/student/:id" component={StudentEdit} exact={true} />
                    <Route exact path="/" render={() => <Redirect to="/students" />} />
                </IonRouterOutlet>
            </IonReactRouter>
        </StudentProvider>
    </IonApp>
);

export default App;
