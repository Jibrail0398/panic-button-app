import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { FirebaseServiceService } from '../service/firebase-service.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private firebase: FirebaseServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //Buat Referensi Database ke ke trydata
    const dbRef = this.firebase.initDatabaseRef('trydata');
    let prevData: string = '';

    //Nyalakan alarm jika ada data berubah, pada code ini tidak menggunakan isDatabaseChanged()
    let count = 0;
    this.firebase.getDatabaseOnRef(dbRef).subscribe((data) => {
      if (count > 0) {
        this.playAlarm();
        console.log('data berubah menjadi:', data);
      } else {
        console.log('data belum berubah');
      }
      count += 1;
    });

    this.startTrackingPosition();
  }

  // prevData:string="";

  latitude: number = 0;
  longitude: number = 0;
  watchId: string | null = null;
  continent: string = '';
  country: string = '';
  country_code: string = '';
  state: string = '';
  town: string = '';
  village: string = '';
  flag: string = '';

  items: any[] = [];
  newItem: any = {
    nama: '',
  };

  async checkPermissions() {
    const hasPermission = await Geolocation.checkPermissions();
    if (hasPermission.location === 'denied') {
      await Geolocation.requestPermissions();
    }
  }

  getMyLocation = async () => {
    // let coordinates = await Geolocation.getCurrentPosition();
    // this.latitude = coordinates.coords.latitude;
    // this.longitude = coordinates.coords.longitude;
  };

  playAlarm() {
    const alarm = new Audio('../../assets/audio/alarm.mp3');
    const play = alarm.play();
  }

  data: any;

  getData() {
    this.http
      .get(
        'https://panic-button-database-default-rtdb.asia-southeast1.firebasedatabase.app/trydata.json'
      )
      .subscribe((response) => {
        if (response) {
          this.data = response;
        }
        console.log(this.data);
      });
  }

  async startTrackingPosition() {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000, // maksimal 10 detik untuk mendapatkan posisi baru
      maximumAge: 0, // jangan gunakan posisi yang tersimpan (dapatkan data lokasi terbaru)
    };

    // Mulai memantau posisi
    this.watchId = await Geolocation.watchPosition(options, (position, err) => {
      if (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getGeocoding();
        console.log('Updated position:', position);
      }
      if (err) {
        console.error('Error watching position', err);
      }
    });
  }

  ngOnDestroy() {
    this.stopTrackingPosition();
  }

  async stopTrackingPosition() {
    if (this.watchId) {
      await Geolocation.clearWatch({ id: this.watchId });
    }
  }

  async getGeocoding() {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json`,
        {
          params: {
            q: this.latitude + '+' + this.longitude,
            key: '9228b41b752a45868d5aa8db6de40350',
          },
        }
      );
      this.continent = response.data.results[0].components.continent;
      this.country = response.data.results[0].components.country;
      this.country_code = response.data.results[0].components.country_code;
      this.state = response.data.results[0].components.state;
      this.town = response.data.results[0].components.town;
      this.village = response.data.results[0].components.village;
      this.flag = response.data.results[0].annotations.flag;
    } catch (error) {
      console.error('Error fetching geocoding:', error);
    }
  }
}
