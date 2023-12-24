// import { ActionConst, Actions } from 'react-native-router-flux';

export const push = (navigation, destinationScene, props = {}) => {
  // navigation, routing.PROFILE, {}
  //   if (Actions.currentScene === destinationScene) {
  //     return;
  //   }
  //   return Actions[destinationScene](props);
};

// export const popTo = (destinationScene, props) => {
//   if (Actions.currentScene === destinationScene) {
//     return;
//   }
//   return Actions.popTo(destinationScene, props);
// };

// export function goToPath(path, params) {
//   return Actions[path]({ type: ActionConst.PUSH, ...params });
// }

// export function replacePath(path, params) {
//   return Actions[path]({ type: ActionConst.REPLACE, ...params });
// }

// export function resetPath(path, params = {}) {
//   return Actions[path]({ type: ActionConst.RESET, ...params });
// }

// export function goToBack(params = {}) {
//   Actions.pop(params);
// }
