import { Outlet } from "react-router-dom"
import { HeaderStyled, MainTitle, NavStyled, StyledNavLink } from "./Layout.styled";
import { Suspense } from "react"; 
import { Loader } from "components/Loader/Loader";
    
export const Layout = () => {
    return <>
        <HeaderStyled>
            <MainTitle>Movies finder</MainTitle>
            <NavStyled>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavStyled>
        </HeaderStyled>
        <main>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};