import { useCallback, useRef, useState, useEffect } from 'react';
import { store } from '@/redux/_store';
import { setNameAndHobby } from '@/redux/_reducers/dataSlice';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const useForm = () => {
  const navigation: any = useNavigation();

  const inputNameRef = useRef(null);
  const inputHobbyRef = useRef(null);

  const nameRedux = useSelector(({ dataSlice }: any) => dataSlice.name);
  const hobbyRedux = useSelector(({ dataSlice }: any) => dataSlice.hobby);

  const [name, setName] = useState(nameRedux);
  const [hobby, setHobby] = useState(hobbyRedux);

  const blurKeyboard = useCallback(() => {
    inputNameRef.current?.blur();
    inputHobbyRef.current?.blur();
  }, []);

  const handleSave = useCallback(() => {
    store.dispatch(setNameAndHobby({ name, hobby }));
    Toast.show({
      type: 'success',
      text1: 'Berhasil menyimpan informasi pribadi Anda! 🎉',
    });
    blurKeyboard();
  }, [blurKeyboard, hobby, name]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      blurKeyboard();
    });
    return unsubscribe;
  }, [blurKeyboard, navigation]);

  return {
    inputNameRef,
    inputHobbyRef,
    name,
    setName,
    hobby,
    setHobby,
    handleSave,
  };
};
