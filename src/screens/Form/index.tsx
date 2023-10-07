import React, { useMemo } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Pressable, Header, Text } from '@/components';
import { defaultColors } from '@/themes';
import { styles } from './styles';
import { useForm } from './_hooks';

const Form = () => {
  const {
    inputNameRef,
    inputHobbyRef,
    name,
    setName,
    hobby,
    setHobby,
    handleSave,
  } = useForm();

  const renderInputName = useMemo(() => {
    return (
      <TextInput
        ref={inputNameRef}
        value={name}
        label="Nama"
        mode="outlined"
        onChangeText={text => setName(text)}
        style={styles.inputName}
        placeholder="Masukkan nama Anda di sini..."
      />
    );
  }, [inputNameRef, name, setName]);

  const renderInputPassword = useMemo(() => {
    return (
      <TextInput
        ref={inputHobbyRef}
        value={hobby}
        label="Hobby"
        mode="outlined"
        onChangeText={text => setHobby(text)}
        style={styles.inputHobby}
        placeholder="Apa hobi favorit Anda?"
      />
    );
  }, [hobby, inputHobbyRef, setHobby]);

  const renderBtnSave = useMemo(() => {
    return (
      <Pressable onPress={handleSave} style={styles.btn}>
        <Text type="medium" size={18} color={defaultColors.white}>
          Simpan
        </Text>
      </Pressable>
    );
  }, [handleSave]);

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.title}>
        <Text type={'medium'} size={18}>
          Informasi Pribadi Anda 📝
        </Text>
      </View>
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Header />
          {renderHeader}
          {renderInputName}
          {renderInputPassword}
          {renderBtnSave}
        </View>
      </View>
    </>
  );
};

export default Form;
