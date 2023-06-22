import { View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig, firebase } from '../../../firebaseConfig';
import OTPTextInput from 'react-native-otp-textinput';
import { Button } from 'react-native';
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";

export function Otp() {
  const navigation = useNavigation();
  let otpInput: any;
  const [PhoneNumber, setPhoneNumber] = useState<any>();
  const [PhoneActived, setPhoneActived] = useState<any>();
  const [VerificationCode, setVerificationCode] = useState<any>();
  const [VerificationId, setVerificationId] = useState<any>();
  const recaptchaVerifier = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const resendCode = () => {
    setIsVisible(true);
    setHasError(false);
  }

  const sendVerification = () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(PhoneNumber, recaptchaVerifier.current)
        .then((verificationId) => {
          setIsVisible(false)
          setVerificationId(verificationId);
          setHasError(false);
        })
        .catch((error) => {
          setHasError(true);
        });
      setPhoneActived(PhoneNumber);
      setPhoneNumber('');
  }

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      VerificationId,
      VerificationCode
    );
      firebase.auth()
      .signInWithCredential(credential)
      .then((response) => {
        setHasError(false);
        if (!isLogged && response) {
          setIsLogged(true);
          console.log('User logged in successfully!', response);
          navigation.navigate("Wallet");
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  }

  const receiveCodeView = () => {
    return (
      <View >
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <SafeAreaView>
          <View>
            <Text>
              Téléphone
            </Text>
            <PhoneInput
              initialValue={PhoneNumber}
              initialCountry="fr"
              onChangePhoneNumber={(text: any) => setPhoneNumber(text)}
            />
            <Text>
              {hasError ? 'Veuillez entrer un numéro de téléphone valide' : ''}
            </Text>
          </View>
          <Button
            data-testID='sendVerification'
            title="Créer mon compte"
            color="#7C4DFF"
            onPress={() => sendVerification()}
          />
        </SafeAreaView>
      </View>
    )
  }

  const confirmCodeView = () => {
    return (
      <View >
        <SafeAreaView>
          <View>
            <Text>
              Code de vérification
            </Text>
            <OTPTextInput
              ref={e => (otpInput = e)}
              maxLength={6}
              keyboardType="numeric"
              inputCount={6}
              autoFocus={true}
              tintColor="#7C4DFF"
              textContentType="oneTimeCode"
              textInputStyle={{ fontSize: 20, color: '#252525' }}
              handleTextChange={setVerificationCode}
            >
            </OTPTextInput>
            <Text>
              {hasError ? 'Veuillez entrer un code valide' : ''}
            </Text>
            <Text>Nous vous avons envoyé un code de vérification au {PhoneActived}</Text>
            <TouchableOpacity onPress={resendCode}>
              <Text>Envoyer le code à nouveau</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Confirmer la vérification"
            color="#7C4DFF"
            onPress={confirmCode}
          />
        </SafeAreaView>
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        {isVisible ? receiveCodeView() : confirmCodeView()}
      </View>
    </TouchableWithoutFeedback>
  );
}

