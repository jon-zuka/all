import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const Mobile = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > img {
    pointer-events: none;
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme?.breakpoints.tablet}) {
    display: none;
  }
`;

const Desktop = styled("div")`
  display: none;
  @media (min-width: ${(props) => props.theme?.breakpoints.tablet}) {
    width: 100%;
    overflow-x: hidden;
    user-select: none;
    display: flex;
    max-height: 100vh;
    gap: 1rem;

    img {
      pointer-events: none;
    }

    & > .img {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    & > .side {
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 0 0 10rem;
      & > * {
        cursor: pointer;
      }
    }
  }
`;

export const Gallery = ({ images }: { images: string[] }) => {
  const [src, setSrc] = createSignal(images[0]);

  return (
    <>
      <Mobile>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Mobile>
      <Desktop>
        <div class="img">
        <img src={src()} />
        </div>
        <div class="side">
          {images.map((image) => (
            <div onClick={() => setSrc(image)}>
              <img src={image} />
            </div>
          ))}
        </div>
      </Desktop>
    </>
    // <StyledDiv>
    //   <div class="desktop">
    //     <Image
    //       src={src()}
    //       variation="background"
    //       style={{
    //         "object-fit": "contain",
    //       }}
    //     />
    //   </div>
    //   <div class="list">
    //     {images.map((image) => (
    //       <>
    //         <Image class="mobile" src={image} />

    //         <div
    //           class="desktop"
    //           onClick={() => {
    //             setSrc(image);
    //           }}
    //         >
    //           <Image src={image} variation="background" />
    //         </div>
    //       </>
    //     ))}
    //   </div>
    //   <div class="mobile">

    //   </div>
    // </StyledDiv>
  );
};
