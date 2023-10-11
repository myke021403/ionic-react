import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList, IonModal, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import Loading from '../../components/LoadingContainer';

import './Tab2.css';

export const Tab2: React.FC = () => {
    const numberOfItemShown = 5;

    const [albums, setAlbums] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [maxItem, setMaxItem] = useState(numberOfItemShown);
    const [showInfiniteScroll, setShowInfiniteScroll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openedAlbum, setOpenedAlbum] = useState(0);

    useIonViewWillEnter(async () => {
        const getAllAlbums = await getAlbums();
        setAlbums(getAllAlbums);
        SetLoading(false);
    });

    const getAlbums = (async () => {
        const fetchAlbums = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const data = await fetchAlbums.json();
        return data;
    });

    const generateMoreItems = () => {
        setTimeout(() => {
            const totalItems = maxItem + numberOfItemShown;
            setMaxItem(totalItems);
        }, 5000);
    }


    function openModal(albumIndex) {
        setOpenedAlbum(albumIndex);
        setIsModalOpen(true);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Album List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <Loading isopen={loading} />

                <IonList>
                    {albums.slice(0, maxItem).map((album, index) => (
                        // <IonButton  expand="block">
                            <IonItem onClick={() => openModal(index)} key={index} className='ion-padding-bottom album-list ion-margin-bottom' lines='none'>
                                <IonImg src={album.thumbnailUrl} slot='start' alt="thumbnail" className='ion-margin-top'></IonImg>
                                {album.title}
                            </IonItem>
                        // </IonButton>
                    ))}
                </IonList>

                <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                { albums[openedAlbum] && albums[openedAlbum].title }
                            </IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={() => setIsModalOpen(false)}>Back</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonText>
                            Content will be here.
                        </IonText>
                    </IonContent>
                </IonModal>

                <IonInfiniteScroll disabled={showInfiniteScroll} onIonInfinite={(ev) => {
                    generateMoreItems();
                    setTimeout(() => ev.target.complete(), 5000);
                }}>
                    <IonInfiniteScrollContent></IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;