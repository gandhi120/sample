import { Toast } from 'native-base';

const ToastMessage = props => {
  const { message, duration = 3000, type = 'info', style = {} } = props;
  const id = 'test-toast';
  if (!Toast.isActive(id)) {
    return Toast.show({
      title: message,
      duration,
      status: type,
      id,
      placement: 'top',
      isClosable: false,
      textStyle: [{ textAlign: 'center' }, style],
    });
  }
};

export default ToastMessage;
