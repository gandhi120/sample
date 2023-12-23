import {observable, makeObservable, action} from 'mobx';
import {persist} from 'mobx-persist';
class UserStore {
  @observable userName = 'userName';
  @observable numberVerified = true;

  @persist('object') @observable obj = {a: 1, b: 2};
  constructor() {
    makeObservable(this);
  }
  @action setName = value => {
    console.log('setName', value);
    this.userName = value;
  };
}
export default UserStore;
