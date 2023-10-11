import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Tab1 from './home_tabs/Tab1';

import { accessibilityOutline, ellipseOutline, homeOutline, imageOutline } from 'ionicons/icons';
import Tab3 from './home_tabs/Tab3';
import Tab2 from './home_tabs/Tab2';

const TabHome: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tab-home" to="/tab-home/tab1"></Redirect>

          <Route path="/tab-home/tab1" render={() => <Tab1 />} exact={true} />
          <Route path="/tab-home/tab2" render={() => <Tab2 />} exact={true} />
          <Route path="/tab-home/tab3" render={() => <Tab3 />} exact={true} />

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton href="/tab-home/tab1" tab="tab1">
            <IonIcon icon={homeOutline}></IonIcon>
            <IonLabel>
              Home
            </IonLabel>
          </IonTabButton>
          <IonTabButton href="/tab-home/tab2" tab="tab2">
            <IonIcon icon={imageOutline}></IonIcon>
            <IonLabel>
              Album
            </IonLabel>
          </IonTabButton>
          <IonTabButton href="/tab-home/tab3" tab="tab3">
            <IonIcon icon={accessibilityOutline}></IonIcon>
            <IonLabel>
              Contact Us
            </IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      

    </IonReactRouter>




  );
};

export default TabHome;
