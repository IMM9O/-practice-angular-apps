import { StorageService } from './storage.service';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/models/constants';

// Straight Jasmine testing without Angular's testing support
describe('StorageService', () => {
  let service: StorageService;
  const store = [];
  const fackeToken = 'fackeToken';

  beforeEach(() => {
    service = new StorageService();
    spyOn(service, 'removeToken').and.callFake(() => {
      store.slice(store.indexOf(LOCAL_STORAGE_TOKEN_KEY), 1);
    });
    spyOn(localStorage, 'setItem').and.callFake(() => {
      store[LOCAL_STORAGE_TOKEN_KEY] = fackeToken;
    });
  });

  it('Should create intance', () => {
    expect(service).toBeTruthy();
  });

  it('should call clear dunction on the service', () => {
    service.removeToken();
    expect(store).toEqual([]);
  });

  it('should localstorage has vale in key TOKEN', () => {
    service.token = fackeToken;
    expect(store[LOCAL_STORAGE_TOKEN_KEY]).toEqual(fackeToken);
  });
});
