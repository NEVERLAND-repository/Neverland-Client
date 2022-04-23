import styled, {css} from 'styled-components';

export const ProfileContainer = styled.div`
 width: 100%;
  /* display: grid; */
  /* margin: 0 auto; */
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  /* gap:4rem; */
  /* min-height: 100vh; */

  .mobile__header {
  height: 2rem;
  padding: 2rem 2rem 7rem 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 48rem) {
    display: none;
};
};

.profile__overview {
  position: relative;
  /* width: 100% */
};

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
  /* background: #000; */
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  top: 65%;
  /* right: 40%; */
  /* transform: translateX(700%); */
  /* transform: translateY(-55%); */
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

/* .profile__pic{
    position: absolute;
    display: flex;
    justify-self: center;
    top: 50;
} */

.profile__pic__icon {
  height: 100%;
  width: 100%;
  z-index: 100;
}
`
