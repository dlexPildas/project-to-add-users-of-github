import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const User = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  margin: 10px 0;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const Bio = styled.Text`
  color: #999;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin: 20px 10px;
`;

export const Starred = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
`;

export const OwnerAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: #aaa;
`;
export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

export const ViewLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavoriteRepositoryButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 5px;
  padding: 5px;
`;

export const FavoriteRepositoryText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
