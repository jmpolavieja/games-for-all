import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Juego } from '../modelos/juego';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  coleccion: string = '';

  constructor(
    private fbs: Firestore
  ) { }

  // Devuelve todos los documentos de una colección
  getCollection() {
    const elementRef = collection(this.fbs, this.coleccion);
    return collectionData(elementRef, { idField: 'id' }) as Observable<any[]>;
  }

  // Devuelve el documento cuya id se pasa
  getDocument(id: string) {
    const elementDocRef = doc(this.fbs, `${this.coleccion}/${id}`);
    return docData(elementDocRef, {idField: 'id'}) as Observable<any>;
  }

  // Añade un documento a la colección
  addDocument(element: any) {
    const colecctionRef = collection(this.fbs, this.coleccion);
    return addDoc(colecctionRef, element);
  }

  // Realiza una consulta a la colección por un campo, devuelve un array de documentos
  queryDocument(campo: string, valor: any) {
    console.log(typeof valor);
    const collectionRef = collection(this.fbs, this.coleccion);
    const queryRef = query(collectionRef, where(campo, '==', valor));
    return collectionData(queryRef, { idField: 'id'}) as Observable<any[]>;
  }

  // Elimina un documento (id)
  deleteDocument(id: string) {
    const elementDocRef = doc(this.fbs, `${this.coleccion}/${id}`);
    return deleteDoc(elementDocRef);
  }

  // Actualiza un documento completo
  updateDocument(element: any) {
    console.log(element);
    const elementDocRef = doc(this.fbs, `${this.coleccion}/${element.id}`);
    return setDoc(elementDocRef, element);
  }

  // Actualiza el precio de un juego
  modificaPrecioJuego(juego: Juego, precio: number){
    const juegoDocRef = doc(this.fbs, `juegos/${juego.id}`);
    return updateDoc(juegoDocRef, { precio: precio});
  }
}
