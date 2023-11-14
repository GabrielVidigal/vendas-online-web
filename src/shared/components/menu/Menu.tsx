import { ContainerLogoName, ContainerMenu, LogoMenu, NameCompany } from "./menu.style";

const Menu = () => {
    return <ContainerMenu>
                <ContainerLogoName>
                    <LogoMenu/>
                    <NameCompany /> Vendas online
            </ContainerLogoName>
        </ContainerMenu>
}

export default Menu;