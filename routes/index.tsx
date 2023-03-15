import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Ghibli API</title>
        {/* <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"> */}

        <style></style>
      </Head>
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <redoc spec-url="swagger.yaml"></redoc>
        <script src="https://rebilly.github.io/ReDoc/releases/latest/redoc.min.js"></script>
      </body>
    </>
  );
}
