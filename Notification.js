import FCM from "react-native-fcm";
import React,{Component,PropTypes} from "react";

class PushNotification extends Component {
    componentDidMount() {
        /* RN-FCM  documentation
          @link https://github.com/evollu/react-native-fcm
         */
        FCM.requestPermissions(); // for iOS
        FCM.getFCMToken().then(token => {
            //console.log('New - ', token);
            this.props.fcm_token(token);
            // store fcm token in your server
        });

        // FCM.getInitialNotification().then(notif=>console.log('intial Notif - ',notif));
        this.notificationUnsubscribe = FCM.on('notification', (notif) => {
        // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
            // console.log('Notification - ', notif);
            if(notif.local_notification){
              //this is a local notification
              //console.log('local Notification')
            }
            if(notif.opened_from_tray){
              //app is open/resumed because user clicked banner
              //click to be handled based on actual data
              this.props.fcm_action(notif);
            }
        });
        // this.localNotificationUnsubscribe = FCM.on('localNotification', (notif) => {
        //     // notif.notification contains the data
        //     console.log('Local Notification - ', notif);
        // });
        this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
            this.props.fcm_token(token);
            // fcm token may not be available on first load, catch it here
        });
    }

    componentWillUnmount() {
        // prevent leaking
        this.refreshUnsubscribe();
        this.notificationUnsubscribe();
        // this.localNotificationUnsubscribe();
    }

    render() {
        return null;
    }

    static propTypes = {
       fcm_action : PropTypes.func.isRequired,
       fcm_token : PropTypes.func.isRequired
    }
};

export default PushNotification;
