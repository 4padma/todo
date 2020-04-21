import firebase from 'firebase';

class fire {
    constructor() {
        this.init();
        this.checkAuth();
    }
    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyAl0d4tU8d435bX7Zq0Y8twHxg8S04wTXE",
                authDomain: "chat-app-9f7fc.firebaseapp.com",
                databaseURL: "https://chat-app-9f7fc.firebaseio.com",
                projectId: "chat-app-9f7fc",
                storageBucket: "chat-app-9f7fc.appspot.com",
                messagingSenderId: "1042837064148",
                appId: "1:1042837064148:web:659620ae7ae68ed12bee41",
                measurementId: "G-FFLH72PSZZ"

            })
        }
    };

    checkAuth = ()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        })
    };

    send = (messages)=>{
        messages.forEach(item => {
            const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user

            }

            this.db.push(message);
        });
    }

    parse = message =>{
        const {user,text,timestamp}=message.val();
        const {key:_id}=message;
        const createdAt=new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callBack =>{
        this.db.on('child_added',snapshot=>callBack(this.parse(snapshot)));
    }

    off(){
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new fire();