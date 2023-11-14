import styled from 'styled-components';
import { LogoutOutlined } from '@ant-design/icons'

export const HeaderContainer = styled.header`
    height: 72px;
    width: calc(100% -240px);
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 32px;


    -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
    box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
    background-color: white;
`

export const LogoExit = styled(LogoutOutlined)`
    font-size: 24px;
`
