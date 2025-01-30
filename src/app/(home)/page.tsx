import Container from "../components/containers/Container";

export default async function Home() {
  return (
    <div className="font-Ysabea">
      <Container>
        <>
          <video autoPlay loop muted>
            <source src="/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
        <hr />
      </Container>
    </div>
  );
}
