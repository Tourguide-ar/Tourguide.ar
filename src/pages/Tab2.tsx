import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Take the Tour</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <iframe title="tour" id="youtube" src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
        <iframe title="tour" id="tour" src="file://Users/seanmizen/Documents/VisProjects/tourguide-ar/src/arfiles/start.html"></iframe>
        <iframe title="eventsPage" id="eventsPage" name="eventsPage" src="openURL()"></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
