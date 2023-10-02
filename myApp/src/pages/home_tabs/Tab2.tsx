import { IonContent, IonHeader, IonImg, IonItem, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';

const Tab2: React.FC = () => {
    const [albums, setAlbums] = useState([]);

    useIonViewWillEnter(async () => {
        const getAlbums = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const data = await getAlbums.json();

        setAlbums(data);
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ablum List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {albums.map((album, index) => (
                        <IonItem key={index} className='ion-padding-bottom' lines='none'>
                            <IonImg src={album.thumbnailUrl} slot='start' alt="thumbnail"></IonImg>
                            {album.title}
                        </IonItem>
                    ))}
                </IonList>
                
            </IonContent>
        </IonPage>
    );
};

export default Tab2;