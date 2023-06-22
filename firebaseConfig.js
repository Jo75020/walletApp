import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsrLcOvMJnlbNC41aRreQH-RtUvAotyDw",
  authDomain: "walletapp-92b57.firebaseapp.com",
  projectId: "walletapp-92b57",
  storageBucket: "walletapp-92b57.appspot.com",
  messagingSenderId: "19306046794",
  appId: "1:19306046794:android:7815d62ea82fd35304cdb3",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app()
}

initializeAuth(firebase.app(), {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { firebaseConfig, firebase };
