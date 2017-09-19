import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Clinic } from '../interfaces/clinic';
import { Patient } from '../interfaces/patient';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clinics: Clinic[] = [
      { id: 1, name: 'Tajao clinic' },
      { id: 2, name: 'Alfta clinic' },
      { id: 3, name: 'Miraflores clinic' },
      { id: 4, name: 'Topeka clinic' },
      { id: 5, name: 'Cikajang clinic' },
      { id: 6, name: 'Skënderbegas clinic' },
      { id: 7, name: 'Candoni clinic' },
      { id: 8, name: 'Naagas clinic' },
      { id: 9, name: 'Nggalak clinic' },
      { id: 10, name: 'Brejoeira clinic' },
      { id: 11, name: 'Araraquara clinic' },
      { id: 12, name: 'Balogo clinic' },
      { id: 13, name: 'Teresina clinic' },
      { id: 14, name: 'Mahaica Village clinic' },
      { id: 15, name: 'Maluanluan clinic' },
      { id: 16, name: 'Mankoeng clinic' },
      { id: 17, name: 'El Mirador clinic' },
      { id: 18, name: 'Lanipao clinic' },
      { id: 19, name: 'Napel clinic' },
      { id: 20, name: 'Port Hawkesbury clinic' },
    ];

    const patients: Patient[] = [
      { id: 1, name: 'Linnet Gehring' },
      { id: 2, name: 'Tiffanie Jirka' },
      { id: 3, name: 'Glynn Lochrie' },
      { id: 4, name: 'Porter Ledeker' },
      { id: 5, name: 'Pasquale Hullock' },
      { id: 6, name: 'Fanni Pley' },
      { id: 7, name: 'Rois Georger' },
      { id: 8, name: 'Doris Gotthard' },
      { id: 9, name: 'Nikolia Hallen' },
      { id: 10, name: 'Katharine Fedoronko' },
      { id: 11, name: 'Ruby Precious' },
      { id: 12, name: 'Murial Lampe' },
      { id: 13, name: 'Phedra Whiscard' },
      { id: 14, name: 'Haven Lee' },
      { id: 15, name: 'Lelia St. Ledger' },
      { id: 16, name: 'Pincas Rowane' },
      { id: 17, name: 'Matthieu Tyrie' },
      { id: 18, name: 'Zenia Pennyman' },
      { id: 19, name: 'Wilek Rannells' },
      { id: 20, name: 'Ellette Emeline' },
    ];

    return { clinics, patients };
  }
}
