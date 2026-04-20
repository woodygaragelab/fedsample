import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-northeast-1_P91IZUybq',
      userPoolClientId: '2i3qjv6s6bl5spntcu91g8k0lc',
    },
  },
});
