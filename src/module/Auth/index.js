const init = async ({storeManager, options}) => {
  console.log('init', storeManager);
  const {hydrate} = options;
  const {projectStore, userStore, splashScreenStore} = storeManager.store;
  console.log('storeManager.stores', storeManager.stores);
  await hydrate('pstore', projectStore);
  hydrate('user', userStore).then(data => {
    console.log('username', data);
    setTimeout(() => {
      // if (userStore.isInitial) {
      //   resetPath(routing.ONBOARDING, {isInitial: true});
      // } else {
      //   if (data.authToken && data.user.id) {
      //     resetPath(routing.FETCHING_DETAILS);
      //   } else {
      //     resetPath(routing.LOGIN);
      //   }
      // }
      splashScreenStore.hideSplashScreen(); // For manually hide splashscreen
    }, 1000);
  });
};

export default init;
