import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.div`
  @media screen and (min-width: 48rem) {
    display: grid;
    grid-template-columns: 20% 80%;
  }
  
  .sidebar-header a{
    text-decoration: none;
  }

  .side-component-wrapper{
    background: #f5f7fa;
  }
`;

export const SidebarNavigationButtons = styled.section`
  display: none;
  ${ ({ isShowing }) => isShowing
    && css`
      background: #fff;
      width: 250px;
      height: 100vh;
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 0;
      z-index: 200;
    ` };
  left: ${ ({ isShowing }) => (isShowing ? '0' : '-100%') };
  transition: ease-in 0.35s;
  -webkit-transition: ease-in 0.35s;

  .sidebar__navbar {
    height: 7rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.1rem;
  }

  /* Media query */
  @media screen and (min-width: 48rem) {
    display: flex;
    padding: 2rem 0;
    flex-direction: column;
    border-right: 1px solid #e6eff5;
    position: sticky;
    top: 0;
    height: 100vh;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  .links {
    display: flex;
    align-items: center;
    height: 48px;
    /* padding: 16px; */
    margin-bottom: 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    appearance: none;
    border: none;
    outline-width: 0px;
    background-color: rgb(255, 255, 255);
    color: rgb(103, 113, 132);

    img {
      margin-right: 10px;
    }

    &.links:hover {
      background: #e7edff;
    }
    &.active {
      border-left: 8px solid ${ ({ theme }) => theme.color.primaryColor };
      color: ${ ({ theme }) => theme.color.primaryColor };

   
    }

    .image__active {
    -webkit-filter: invert(54%) sepia(94%) saturate(470%) hue-rotate(359deg)
      brightness(105%) contrast(92%);
    filter: invert(54%) sepia(94%) saturate(470%) hue-rotate(359deg)
      brightness(105%) contrast(92%);
  }
  }

 

  .sidebar__navlinks__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 70vh;
  }

  .sidebar__navlinks {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavLinkLogo = styled(Link)`
  display: block;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
