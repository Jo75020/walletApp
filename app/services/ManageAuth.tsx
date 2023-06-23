import { firebase } from '../../firebaseConfig';

export async function IsLoggedIn(): Promise<any> {
  let currentUser;
  try {
    await new Promise((resolve, reject) =>
      firebase.auth().onAuthStateChanged(
        user => {
          if (user) {
            currentUser = user
            resolve(user)
          } else {
            reject('no user logged in')
          }
        },
        error => reject(error)
      )
    )
    return currentUser
  } catch (error) {
    return false
  }
}
