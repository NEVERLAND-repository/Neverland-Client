import styled from 'styled-components';

export const LibraryWapper = styled.div`
  margin: 0 auto;
  width: 90%;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;

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
        color: ${({ theme }) => theme.color.secondaryColor};
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
  .tab-group {
    width: 100%;
    padding: 0 3rem;
  }
  .tab-list {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    margin-bottom: 48px;
    button {
      height: 5rem;
    }
  }

  .tab-content {
    font-size: 14px;
    font-weight: 600;
  }
  .border-right {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  .border-left {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  .no-active {
    border-bottom: 4px solid ${({ theme }) => theme.color.secondaryColor};
    opacity: 0.5;
  }
  .library-title {
    @media screen and (min-width: 48rem) {
      display: none;
    }
  }

  .active {
    border-bottom: 4px solid ${({ theme }) => theme.color.primaryColor};
  }
  .read-books {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;
    @media screen and (min-width: 712px) {
      grid-template-columns: repeat(2, 50%);
    }

    @media screen and (min-width: 48rem) {
      /* grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));; */
      justify-content: center;
      display: flex;
      flex-flow: row wrap;
      gap: 4rem;
    }

    /* display: grid; */
  }
`;
