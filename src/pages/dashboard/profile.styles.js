import styled, {css} from 'styled-components';

export const MobileNavigation = styled.header`
  /* height: 2rem; */
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 

  .hamburger:hover{
    transform: rotate(90deg);
    filter: invert(54%) sepia(94%) saturate(470%) hue-rotate(359deg)
        brightness(105%) contrast(92%);
    transition: all 0.50s;
  };

  @media screen and (min-width: 48rem) {
    display: none;
};
`

export const ProfileContainer = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;


.profile__overview {
  position: relative;
  /* width: 100% */
};

.profile-title{
  width: 90%;
  margin: 1rem auto 3rem auto;

  @media screen and (min-width: 48rem){
    display: none;
  }
}
.profile__patterns {
  width: 100%;
  height: 200.4px;
}

.patterns {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 65%;
}
.profile__pic {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc27d;
  border-radius: 50%;
}

.profile__pic__icon {
  height: 100%;
  width: 100%;
  z-index: 100;
}
`
