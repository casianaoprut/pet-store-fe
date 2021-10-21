import {Injectable} from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {Status} from "../shared/model/status";
import {SaleForm} from "../shared/model/sale-form.model";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  pendingSaleFormsCollection: AngularFirestoreCollection;
  saleForms = new Observable<SaleForm[]>();
  saleListCollection: AngularFirestoreCollection;
  saleList = new Observable<SaleForm[]>();

  constructor(
    private afs: AngularFirestore
  ) {
    this.pendingSaleFormsCollection = this.afs.collection('sale-forms', ref => {
      return ref.where('status', '==', Status.Pending);
    });
    this.saleForms = this.pendingSaleFormsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as SaleForm;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.saleListCollection = this.afs.collection('sale-forms', ref => {
      return ref.where('status', '==', Status.Accepted);
    });
    this.saleList = this.saleListCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as SaleForm;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  submitSaleForm(saleForm: SaleForm): void {
    this.afs.collection('sale-forms').add(saleForm);
  }

  acceptSaleForm(form: SaleForm): Promise<void>{
    const formRef: AngularFirestoreDocument<SaleForm> = this.afs.doc(`sale-forms/${form.id}`);
    const acceptedForm: SaleForm = {
      ...form,
      status: Status.Accepted,
    };
    return formRef.set(acceptedForm, {merge: true});
  }

  rejectSaleForm(form: SaleForm): Promise<void>{
    const formRef: AngularFirestoreDocument<SaleForm> = this.afs.doc(`sale-forms/${form.id}`);
    const rejectedForm: SaleForm = {
      ...form,
      status: Status.Rejected,
    };
    return formRef.set(rejectedForm, {merge: true});
  }

  getUserSaleForms(userUid: string): Observable<SaleForm[]> {
    const userAdoptionForms: AngularFirestoreCollection = this.afs.collection('sale-forms', ref => {
      return ref.where('userUid', '==', userUid).where('userReview', '==', true);
    });
    return userAdoptionForms.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as SaleForm;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  clearUserSaleForm(form: SaleForm): Promise<void>{
    const formRef: AngularFirestoreDocument<SaleForm> = this.afs.doc(`sale-forms/${form.id}`);
    if (form.status == Status.Accepted){
      const acceptedForm: SaleForm = {
        ...form,
        userReview: false
      };
      return formRef.set(acceptedForm, {merge : true});
    } else {
      return formRef.delete();
    }
  }

  getAllSaleFormsForPet(uid: string): Observable<SaleForm[]>{
    const petsAdoptionForms: AngularFirestoreCollection = this.afs.collection('sale-forms', ref => {
      return ref.where('petId', '==', uid);
    });
    return petsAdoptionForms.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as SaleForm;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
}
