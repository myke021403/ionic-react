import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Loading: React.FC = (props) => (
    <IonLoading isOpen={props.loading} message="Loading..." spinner="circles"></IonLoading>
);

export default Loading;