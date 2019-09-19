import React from 'react';

import PropTypes from 'prop-types';

import api from '../../services/api';

import {ActivityIndicator} from 'react-native';

import {
  Container,
  User,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  ViewLoading,
  FavoriteRepositoryButton,
  FavoriteRepositoryText,
} from './styles';

export default class UserPage extends React.Component {
  //Altera o título na header
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };
  state = {
    loading: false,
    stars: [],
    page: 1,
  };

  async componentDidMount() {
    this.setState({loading: true});
    await this.loadMore();
    this.setState({loading: false});
  }

  //função para carregar os novas páginas do github
  loadMore = async () => {
    const {page, stars} = this.state;

    let newPage = page + 1;
    const {navigation} = this.props;

    const user = navigation.getParam('user');

    //busca as starreds do usuário por página
    const response = await api.get(`/users/${user.login}/starred?page=${page}`);

    this.setState({
      page: newPage,
      stars:
        stars.length > 0
          ? [...stars, ...response.data]
          : response.data !== null
          ? response.data
          : [...stars],
    });
  };

  //Navega para outra tela
  handleNavigation = user => {
    const {navigation} = this.props;

    navigation.navigate('FavoriteRepository', {user});
  };

  render() {
    const {navigation} = this.props;
    const {stars, loading} = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <User>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </User>
        {loading ? (
          <ViewLoading>
            <ActivityIndicator />
          </ViewLoading>
        ) : (
          <Stars
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({item}) => (
              <Starred>
                <OwnerAvatar source={{uri: item.owner.avatar_url}} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
                <FavoriteRepositoryButton
                  onPress={() => this.handleNavigation(item)}>
                  <FavoriteRepositoryText>Acessar</FavoriteRepositoryText>
                </FavoriteRepositoryButton>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
