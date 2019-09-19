import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  border-bottom-width: 1px;
  border-color: #7559c1;
  border-radius: 5px;
  padding: 10px 15px;
  background: #eee;
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  justify-content: center;
  align-content: center;
  padding: 0 10px;
  border-radius: 10px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 10px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #ddd;
`;
export const Name = styled.Text`
  margin: 5px 0;
  font-weight: bold;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #aaa;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const ProfileButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
