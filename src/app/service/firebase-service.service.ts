import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getDatabase,ref,onValue, DatabaseReference,onChildAdded,push } from "firebase/database";
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
    })

  }//

  //format tanggal indonesia
  indonesianFormatDate(date: Date) {
    
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    return date.toLocaleDateString('id-ID', options);
  }

  //insert ke database realtime
  async insertDatabaseOnRef(path:string,long:number,lat:number){

    const dbRef = this.initDatabaseRef(path);
    const date = new Date()
    await push(dbRef,{
      id:environment.userId,
      longitude:long,
      latitude:lat,
      tanggal:this.indonesianFormatDate(date)
    })
  }

  detectAddChanges(path:string):Observable<any>{
    const dbRef = this.initDatabaseRef(path);

    return new Observable((observer)=>{
      onChildAdded(dbRef, 
        (snapshot) => {
        const key = snapshot.key; 
        const data = snapshot.val(); 
        observer.next(data) 
      },
      (error)=>{
        observer.next(error)
      }
    );
    })
    
  }
  
}

