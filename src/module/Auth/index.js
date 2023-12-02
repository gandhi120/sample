const init = async ({storeManager, options}) => {
  console.log('init', storeManager);
  const {hydrate} = options;
  const {projectStore} = storeManager.store;
  console.log('storeManager.stores', storeManager.stores);
  hydrate('pstore', projectStore)
    .then(() => console.log('someStore has been hydrated'))
    .catch(e => console.log('e', e));
};

export default init;
