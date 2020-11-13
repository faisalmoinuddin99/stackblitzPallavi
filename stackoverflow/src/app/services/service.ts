import { BehaviorSubject } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

import { Crop } from './crop';

export class CropService {
    private selectedCrop = new BehaviorSubject<Crop>(null);

    setCrop(crop: Crop) {
        this.selectedCrop.next(crop);
    }

    getCrop() {
        this.selectedCrop.asObservable().pipe(skipWhile(val => val === null));
    }
}