import styled from 'styled-components';

export const LibraryWapper = styled.div`
  margin: 0 auto;
  width: 90%;
  border: 1px solid red;
  height: 100vh;
  padding-top: 2rem;

  .library-search {
    /* border: 1px solid green; */
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      position: static;
      div {
        margin-top: 0;
      }
      input {
        background-color: #fff;
        color: ${ ({ theme }) => theme.color.secondaryColor };
        &:focus {
        outline: none;
        outline: none;
        box-shadow: 0 0 4px #ccc;
        }
      }
      svg {
        color: rgba(130, 130, 130, 0.5);
      }
    }

    /* .input: */
  }
`;
