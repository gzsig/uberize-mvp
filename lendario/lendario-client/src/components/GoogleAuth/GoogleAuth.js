import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import * as S from './style';
import server from '../../resources/axios';
import Consumer from '../../context/AppConsumer';
import appContext from '../../context/AppContext';
import Loader from '../Loader';

class GoogleAuth extends Component {
  // componentWillMount() {
  //   this.context.validateUser();
  // }
  // componentDidMount() {
  //   const query = queryString.parse(this.props.router.location.search);
  //   if (query.token) {
  //     window.localStorage.setItem('crpt', query.token);
  //     this.props.router.history.push('/');
  //     this.context.updateState({ loggedIn: 2 });
  //   }
  // }
  handleLogInClick = () => {
    // server.get('/auth/google')
    window.location.assign('http://localhost:3001/auth/google');
  };

  testCalClick = () => {
    // console.log('estou aqui click');
    // console.log(this.context.state);

    server(window.localStorage.crpt)
      .get('/google/cal')
      .then(res => {
        console.log(res.data);
        if (res.data.success == false) {
          console.log('logout');
        }
      })
      .catch(err => {
        console.log('estou aqui errr');
        console.log('err', err);
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Consumer>
          {context => {
            return <div>{context.state.loggedIn === 0 ? <Loader /> : `${context.state.loggedIn}` }</div>;
          }}
        </Consumer> */}
        <S.LoginCard>
          <S.Welcome>Bem Vindo</S.Welcome>
          <S.GoogleBtn onClick={this.handleLogInClick}>
            <S.SvgIcon>
              <svg width='25' height='37' viewBox='0 0 25 25'>
                <g fill='none' fillRule='evenodd'>
                  <path
                    d='M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z'
                    fill='#34A853'
                  />
                  <path
                    d='M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z'
                    fill='#FBBC05'
                  />
                  <path
                    d='M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z'
                    fill='#EA4335'
                  />
                </g>
              </svg>
            </S.SvgIcon>
            <span className='button-label'>Login com Google</span>
          </S.GoogleBtn>
          <S.Footer>
            Não tem gmail? Sem problemas,{' '}
            <a href='https://gmail.com' target='_blank'>
              crie
            </a>{' '}
            um agora!
          </S.Footer>
        </S.LoginCard>
        <div onClick={this.testCalClick}>click me</div>
      </React.Fragment>
    );
  }
}
GoogleAuth.contextType = appContext;
export default GoogleAuth;
