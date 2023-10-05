import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonList, IonLoading, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import Loading from '../../components/LoadingContainer';

const Tab2: React.FC = () => {
    const [albums, setAlbums] = useState([]);

    useIonViewWillEnter(async () => {
        const getAllAlbums = await getAlbums(); 
        setAlbums(getAllAlbums);
    });

    const getAlbums = (async () => {
        const fetchAlbums = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const data = await fetchAlbums.json();
        return data;
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ablum List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {albums.length < 1 ? (
                    <Loading />
                ) : (
                    <IonList>
                        {albums.map((album, index) => (
                            <IonItem key={index} className='ion-padding-bottom' lines='none'>
                                <IonImg src={album.thumbnailUrl} slot='start' alt="thumbnail"></IonImg>
                                {album.title}
                            </IonItem>
                        ))}
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Tab2;