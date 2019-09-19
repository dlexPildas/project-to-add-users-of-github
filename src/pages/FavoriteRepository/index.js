import React from 'react';

//carrega a webView
import {WebView} from 'react-native-webview';

class FavoriteRepository extends React.Component {
  //Altera o título na header
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('user');

    return <WebView source={{uri: item.html_url}} style={{flex: 1}} />;
  }
}

export default FavoriteRepository;
