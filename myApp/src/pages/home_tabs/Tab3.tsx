import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const Tab3: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        subject: '',
        message: '',
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(formData.email 
            && formData.firstname 
            && formData.lastname 
            && formData.subject 
            && formData.message){
            // console.log(formData);
            alert('Success! Send to a server thru API or mail server');
        } else {
            alert('All fields are required!');
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Contact Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonTitle>
                    Please let us know what you need.
                </IonTitle>
                <form onSubmit={handleSubmit}>
                    
                    <IonList>
                        <IonItem>
                            <IonInput 
                                labelPlacement="floating" 
                                label="Email Address" 
                                type="email"
                                value={formData.email}
                                onIonChange={(e) => setFormData({ ...formData, email: e.detail.value! })}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput 
                                labelPlacement="floating" 
                                label="First Name" 
                                type="text"
                                value={formData.firstname}
                                onIonChange={(e) => setFormData({ ...formData, firstname: e.detail.value! })}
                                required
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput 
                                labelPlacement="floating" 
                                label="Last Name" 
                                type="text"
                                value={formData.lastname}
                                onIonChange={(e) => setFormData({ ...formData, lastname: e.detail.value! })}
                                required
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput 
                                labelPlacement="floating" 
                                label="Subject" 
                                type="text"
                                value={formData.subject}
                                onIonChange={(e) => setFormData({ ...formData, subject: e.detail.value! })}
                                required
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonTextarea 
                                label="Message" 
                                placeholder="What do you  want to say?" 
                                labelPlacement="floating"
                                value={formData.message}
                                onIonChange={(e) => setFormData({ ...formData, message: e.detail.value! })}
                                required
                            ></IonTextarea>
                        </IonItem>
                        <IonButton expand="full" shape="round" type="submit">
                            Submit
                        </IonButton>
                    </IonList>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;