import React, { useRef, useState } from 'react';
import { Dimensions, Text } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { REACT_APP_API } from '@env';

import backgroundImage from '@assets/img/backgroundImage.jpg';
import logoPrueba from '@assets/img/logoPrueba.jpg';
import { useDispatch } from 'react-redux';
import { getUser, setToken } from '@redux/user';

const { width: WIDTH } = Dimensions.get('window');

export default function Login({ navigation }) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [hidePass, setHidePass] = useState(true);

	const onPress = () => setHidePass((prevState) => !prevState);

	const handleLoginPress = () => {
		let input = {
			email: email,
			password: userPassword,
		};
		axios.post(`${REACT_APP_API}/auth/login`, input).then((token) => {
			axios
				.get(`${REACT_APP_API}/auth/me`, {
					headers: {
						Authorization: `Bearer ${token.data}`,
					},
				})
				.then((user) => {
					dispatch(getUser(user.data));
					dispatch(setToken(token.data));
				});
			navigation.navigate('Home');
		});
	};
	const handleSignUp = () => {
		navigation.navigate('SignUp');
	};

	return (
		<Container source={backgroundImage}>
			<LogoView>
				<Logo source={logoPrueba} />
				<LogoText>QuizMe App</LogoText>
			</LogoView>
			<InputContainer>
				<IconImage
					name={'ios-person-outline'}
					size={28}
					color={'rgba(255,255,255,0.7)'}
				/>
				<InputLogin
					onChangeText={(UserEmail) => setEmail(UserEmail)}
					width={WIDTH}
					placeholder={'Usuario'}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underlineColorAndroid="transparent"
				/>
			</InputContainer>
			<InputContainer>
				<IconImage
					name={'ios-lock-closed-outline'}
					size={28}
					color={'rgba(255,255,255,0.7)'}
				/>
				<InputLogin
					onChangeText={(UserPassword) =>
						setUserPassword(UserPassword)
					}
					width={WIDTH}
					placeholder={'Contraseña'}
					secureTextEntry={hidePass}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underlineColorAndroid="transparent"
				/>
				<Button onPress={onPress}>
					<Icon
						name={'ios-eye-outline'}
						size={26}
						color={'rgba(255,255,255,0.7)'}
					/>
				</Button>
			</InputContainer>
			<ButtonLogin width={WIDTH} onPress={handleLoginPress}>
				<Description>Iniciar sesión</Description>
			</ButtonLogin>
			<TextView>
				<Text>
					¿No tienes una cuenta?{' '}
					<Text
						style={{ fontWeight: '500', color: 'blue' }}
						onPress={handleSignUp}
					>
						Regístrate
					</Text>
				</Text>
			</TextView>
		</Container>
	);
}

const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: null;
	height: null;
`;
const LogoView = styled.View`
	align-items: center;
	margin-bottom: 40px;
`;
const Logo = styled.Image`
	width: 100px;
	height: 100px;
`;
const LogoText = styled.Text`
	color: white;
	font-size: 30px;
	font-weight: 500;
	margin-top: 10px;
	opacity: 0.5;
`;
const InputContainer = styled.View`
	margin-top: 10px;
`;
const InputLogin = styled.TextInput`
	width: ${(props) => props.width - 55}px;
	height: 45px;
	/* border-radius: 25px; */
	font-size: 16px;
	padding-left: 45px;
	background-color: rgba(0, 0, 0, 0.35);
	color: rgba(255, 255, 255, 0.7);
	margin: 0 25px;
`;
const IconImage = styled(Icon)`
	position: absolute;
	top: 8px;
	left: 38px;
`;
const Button = styled.TouchableOpacity`
	position: absolute;
	top: 8px;
	right: 38px;
`;
const ButtonLogin = styled.TouchableOpacity`
	width: ${(props) => props.width - 55}px;
	height: 45px;
	background-color: #000000;
	justify-content: center;
	margin-top: 20px;
	padding: 16px 70px;
`;
const Description = styled.Text`
	color: rgba(255, 255, 255, 0.7);
	font-size: 16px;
	text-align: center;
`;
const TextView = styled.View`
	align-items: center;
	margin-top: 20px;
`;
