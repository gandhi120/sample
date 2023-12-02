import {observable, makeObservable, action, values} from 'mobx';
import {persist} from 'mobx-persist';
class ProjectStore {
  @observable userName = 'varun';
  @persist('object') @observable obj = {a: 1, b: 2};
  constructor() {
    makeObservable(this);
  }
  @action setName = value => {
    console.log('setName', value);
    this.userName = value;
  };
}
// const projectStore = new ProjectStore();
export default ProjectStore;
