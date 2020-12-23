import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonList, IonLoading,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { add } from 'ionicons/icons';
import Student from './Student';
import { getLogger } from '../core';
import { StudentContext } from './StudentProvider';

const log = getLogger('StudentList');

const StudentList: React.FC<RouteComponentProps> = ({ history }) => {
    const { students, fetching, fetchingError } = useContext(StudentContext);
    log('render');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading isOpen={fetching} message="Fetching students" />
                {students && (
                    <IonList>

                        {students.map(({ _id, nume,prenume,grupa,active}) =>
                            <Student key={_id} _id={_id} nume={nume} prenume={prenume} grupa={grupa} active={active}  onEdit={id => history.push(`/student/${id}`)} />)}
                    </IonList>
                )}
                {fetchingError && (
                    <div>{fetchingError.message || 'Failed to fetch students'}</div>
                )}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={() => history.push('/student')}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default StudentList;
