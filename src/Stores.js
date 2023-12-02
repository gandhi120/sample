import ProjectStore from '@projectStore';
export default function createStore() {
  return {
    projectStore: new ProjectStore(),
  };
}
