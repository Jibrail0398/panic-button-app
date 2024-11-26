import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getDatabase,ref,onValue, DatabaseReference } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor() { }
  
  //inisialisasi database namun di encapsulasi
  private app = initializeApp(environment.firebaseConfig)
  private database = getDatabase(this.app);

  

  //Inisialisasi Referensi Database
  initDatabaseRef(path:any){
    const dbRef = ref(this.database,path)
    return dbRef;
  }

  //Cek apakah data di Referensi Database berubah
  isDatabaseChanged(dbRef: DatabaseReference, prevData: any): Observable<boolean> {
    return new Observable((observer) => {
      onValue(
        dbRef,
        (snapshot) => {
          const newData = snapshot.val();
          if(prevData === newData){

            observer.next(true); 
          }else{
            observer.next(false)
          }
        },
        (error) => {
          observer.error(error); 
        }
      );
    });
  }

  //Ambil data di Referensi Database tertentu
  getDatabaseOnRef(dbRef:DatabaseReference):Observable<any>{
    return new Observable((observer)=>{
      onValue(dbRef,
        (snapshot)=>{
        observer.next(snapshot.val())
      },
      (error)=>{
        observer.error(error);
      }
    )
    }
  )
  }


  
}
