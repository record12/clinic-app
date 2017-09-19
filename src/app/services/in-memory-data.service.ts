import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Clinic } from '../interfaces/clinic';

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

    return { clinics };
  }
}
